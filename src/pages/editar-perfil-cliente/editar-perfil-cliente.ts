import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import{PersonaService} from '../../services/Persona/persona-service';
import { Persona } from '../../models/Persona';
import {AlertController} from 'ionic-angular';
import{ConfiguraciNClientePage}  from '../configuraci-ncliente/configuraci-ncliente'
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private personaser:PersonaService,private alertCtrl:AlertController) {

  }

  
  ionViewWillLoad() {
   this.personaobj=this.navParams.get('item');
   
  }

  updatePersona(personaobj:Persona)
  {


    try{
      this.personaser.editUsuarioItem(personaobj).then(()=> {

        let alert = this.alertCtrl.create({
          title: 'CORRECTO',
          subTitle: 'El Item ha sido ELIMINADO',
          buttons: ['Aceptar']
      
          
        });
        alert.present();
        this.navCtrl.push(ConfiguraciNClientePage);
      });
    }
    catch(e)
    {
      let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'El Item NO ha sido ELIMINADO',
        buttons: ['Aceptar']
    
        
      });
      alert.present();
    }
    
  }

}
