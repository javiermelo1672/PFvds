import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { UPSNecesitasPermisosPage } from '../upsnecesitas-permisos/upsnecesitas-permisos';
import { RegistroAdminPage } from '../registro-admin/registro-admin';
import { HolaPage } from '../hola/hola';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/Usuario';
import { AlertController } from 'ionic-angular';
import {Persona} from '../../models/Persona';
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  ids:string;
  userst= {} as Usuario;
  
  constructor(public toastCtrl: ToastController,private network: Network,private alertCtrl: AlertController,private afAuth:AngularFireAuth, public navCtrl: NavController,public loadingCtrl: LoadingController) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast();
    });
    disconnectSubscription.unsubscribe();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Revisa tu conexión Porfavor',
      duration: 3000
    });
    toast.present();
  }
  goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  //Pantalla inicial
  goToHola(userst:Usuario){
    try{

      let alert = this.alertCtrl.create({
        title: 'Perdona, ¡Algo ha salido mal!',
        subTitle: 'Es posible que tus credenciales estén incorrectas',
        buttons: ['Aceptar']

        
      });

      const loader = this.loadingCtrl.create({
        content: "Iniciando Sesión"
      });
      
      

      loader.present().then(() => {
        this.afAuth.auth.signInWithEmailAndPassword(userst.email,userst.password)
        .then(res=> this.navCtrl.push(HolaPage))
        .catch(reject =>alert.present());
          
        loader.dismiss();
      });
      
     
    }
    catch(e){
     
    }
  }
}
