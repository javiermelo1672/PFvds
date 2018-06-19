import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-editar-perfil-admin',
  templateUrl: 'editar-perfil-admin.html'
})
export class EditarPerfilAdminPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
