import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-editar-perfil-cliente',
  templateUrl: 'editar-perfil-cliente.html'
})
export class EditarPerfilClientePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
