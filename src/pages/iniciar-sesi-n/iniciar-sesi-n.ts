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
<<<<<<< HEAD
import { LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
=======
import {PersonaService} from '../../services/Persona/persona-service';

>>>>>>> 9610bb508341be8f60c1c7384feec85f2cbe605c
@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  ids:string;
  userst= {} as Usuario;
  
<<<<<<< HEAD
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
=======
  constructor(private alertCtrl: AlertController,private afAuth:AngularFireAuth, public personaService: PersonaService, public navCtrl: NavController) {
    
>>>>>>> 9610bb508341be8f60c1c7384feec85f2cbe605c
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

<<<<<<< HEAD
      const loader = this.loadingCtrl.create({
        content: "Iniciando Sesión"
      });
      
      

      loader.present().then(() => {
        this.afAuth.auth.signInWithEmailAndPassword(userst.email,userst.password)
        .then(res=> this.navCtrl.push(HolaPage))
        .catch(reject =>alert.present());
          
        loader.dismiss();
      });
      
=======
      var that = this;
      this.afAuth.auth.signInWithEmailAndPassword(userst.email,userst.password).then(
        function(firebaseUser) {
          var persona = that.personaService.getSpecificUser(firebaseUser.user.uid).valueChanges();
            persona.subscribe(user => {
              console.log("user: ", user[0]);
              if (user[0].Tipo == "Cliente") { 
                console.log("un cliente ha iniciado sesión...");
                that.navCtrl.push(HolaPage);
              } else {
                console.log("es admin")
              }
            });
        }
      ).catch(
        reject =>alert.present()
      ); 
>>>>>>> 9610bb508341be8f60c1c7384feec85f2cbe605c
     
    }
    catch(e){
     console.log("error:", e);
     
    }
  }
}
