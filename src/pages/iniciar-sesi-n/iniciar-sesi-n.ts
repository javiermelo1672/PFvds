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
import {PersonaService} from '../../services/Persona/persona-service';
import { HolaAdminPage } from '../../pages/hola-admin/hola-admin';
@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  ids:string;
  userst= {} as Usuario;
  
  constructor(public toastCtrl: ToastController,private network: Network,public personaService: PersonaService,private alertCtrl: AlertController,private afAuth:AngularFireAuth, public navCtrl: NavController,public loadingCtrl: LoadingController) {
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
     var that = this;
      this.afAuth.auth.signInWithEmailAndPassword(userst.email,userst.password).then(
        function(firebaseUser) {
          var persona = that.personaService.getSpecificUser(firebaseUser.user.uid).valueChanges();
            persona.subscribe(user => {
              console.log("user: ", user[0]);
              if (user[0].Tipo == "Cliente") { 
                console.log("un cliente ha iniciado sesión...");
                that.navCtrl.push(HolaPage);
                loader.dismiss();
              } else {
                console.log("es admin o cliente")
                that.navCtrl.push(HolaAdminPage);
                loader.dismiss();
              }
            });
        }
      ).catch(
        reject =>alert.present()
      ); 
      loader.dismiss();
    });




    }
    catch(e){
     console.log("error:", e);
     
    }
  }
}
