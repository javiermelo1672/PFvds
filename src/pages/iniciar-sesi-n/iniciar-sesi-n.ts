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
@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  ids:string;
  userst= {} as Usuario;
  
  constructor(private alertCtrl: AlertController,private afAuth:AngularFireAuth, public navCtrl: NavController) {
    
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
      
      
     this.afAuth.auth.signInWithEmailAndPassword(userst.email,userst.password).then(res=> this.navCtrl.push(HolaPage)).catch(reject =>alert.present());
     
     
    }
    catch(e){
     
    }
  }
}
