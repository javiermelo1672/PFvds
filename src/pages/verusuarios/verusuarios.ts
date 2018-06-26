import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Persona } from '../../models/Persona';
import {AngularFireAuth} from "angularfire2/auth";
import{PersonaService}  from '../../services/Persona/persona-service';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the VerusuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verusuarios',
  templateUrl: 'verusuarios.html',
})
export class VerusuariosPage {
  usuariosobj:Persona;
  ids:string;
  displayname:string;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private personaser:PersonaService,private alertCtrl:AlertController) {
  }

  ionViewWillLoad() {
    this.usuariosobj=this.navParams.get('item');
  }

  loadUsuarios(personaobj:Persona){
    this.personaser.getUsuarioList();
    this.navCtrl.push(VerusuariosPage);
  
}

  }


