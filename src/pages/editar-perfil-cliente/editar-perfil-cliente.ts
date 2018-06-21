import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  //aqui va el objeto del cliente
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilClientePage');
  }

}
