import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import{PersonaService} from '../../services/Persona/persona-service';
import { Persona } from '../../models/Persona';
import {AlertController} from 'ionic-angular';
import{ConfiguraciNClientePage}  from '../configuraci-ncliente/configuraci-ncliente';
import { AngularFireAuth } from "angularfire2/auth";
// aqui se importa la clase import {} from '../editar-perfil-cliente/editar-perfil-cliente';
/**
 * Generated class for the EditarPerfilClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-perfil-cliente',
  templateUrl: 'editar-perfil-cliente.html',
})
export class EditarPerfilClientePage {
  personaobj:Persona;
  //aqui va el objeto del cliente
  ids:string;
  displayname:string;
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private personaser:PersonaService,private alertCtrl:AlertController) {

  }

  
  ionViewWillLoad() {
   this.personaobj=this.navParams.get('item');
   
  }

  updatePersona(personaobj:Persona)
  {

    
      this.afAuth.authState.subscribe(user => {
        if (!user) {
          this.displayname = null;        
          return;
        }       
      });
      this.ids=this.afAuth.auth.currentUser.uid;
      
      this.personaser.editUsuarioItem(personaobj,this.ids).then(()=> {
         this.navCtrl.push(ConfiguraciNClientePage);
      });
   
    
    


    
    
  }

}
