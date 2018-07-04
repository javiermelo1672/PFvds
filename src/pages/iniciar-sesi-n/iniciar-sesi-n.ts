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
import {PersonaService} from '../../services/Persona/persona-service';

@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  ids:string;
  userst= {} as Usuario;
  
  constructor(private alertCtrl: AlertController,private afAuth:AngularFireAuth, public personaService: PersonaService, public navCtrl: NavController) {
    
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
     
    }
    catch(e){
     console.log("error:", e);
     
    }
  }
}
