import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsAdminControllerPage } from '../tabs-admin-controller/tabs-admin-controller';
@Component({
  selector: 'page-hola-admin',
  templateUrl: 'hola-admin.html'
})
export class HolaAdminPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  
  gotoVistaAdmin(){
    this.navCtrl.push(TabsAdminControllerPage);
  }
  
}
