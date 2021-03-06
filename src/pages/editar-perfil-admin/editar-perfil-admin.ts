import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{PersonaService} from '../../services/Persona/persona-service';
import { PersonaEmpresa } from '../../models/PersonaEmpresa';
import {AlertController} from 'ionic-angular';
import{ConfiguraciNAdminPage}  from '../configuraci-nadmin/configuraci-nadmin';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the EditarPerfilAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-perfil-admin',
  templateUrl: 'editar-perfil-admin.html',
})
export class EditarPerfilAdminPage {
  personasobj:PersonaEmpresa;
  ids:string;
  displayname:string;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private personaser:PersonaService,private alertCtrl:AlertController) {
  }

  
  ionViewWillLoad() {
    this.personasobj=this.navParams.get('item');
    
   }
 
   updatePersona(personasobj:PersonaEmpresa)
   {
       this.afAuth.authState.subscribe(user => {
         if (!user) {
           this.displayname = null;        
           return;
         }       
       });
       this.ids=this.afAuth.auth.currentUser.uid;
       
       this.personaser.editUsuariosItem(personasobj,this.ids).then(()=> {
          this.navCtrl.push(ConfiguraciNAdminPage);
       });
    
     
   }

}
