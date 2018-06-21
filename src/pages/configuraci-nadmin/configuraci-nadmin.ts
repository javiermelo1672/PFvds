import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AAdirCuentaPage } from '../a-adir-cuenta/a-adir-cuenta';
import { AAdirAseguradoraPage } from '../a-adir-aseguradora/a-adir-aseguradora';
import { AAdirVehCuloPage } from '../a-adir-veh-culo/a-adir-veh-culo';

@Component({
  selector: 'page-configuraci-nadmin',
  templateUrl: 'configuraci-nadmin.html'
})
export class ConfiguraciNAdminPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAAdirCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirCuentaPage);
  }
  goToAAdirAseguradora(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirAseguradoraPage);
  }
  goToAAdirVehCulo(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirVehCuloPage);
  }
}
