import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroAdminPage } from '../registro-admin/registro-admin';
import { IniciarSesiNPage } from '../iniciar-sesi-n/iniciar-sesi-n';
import { RegistroPage } from '../registro/registro';

import { HolaPage } from '../hola/hola';

@Component({
  selector: 'page-upsnecesitas-permisos',
  templateUrl: 'upsnecesitas-permisos.html'
})
export class UPSNecesitasPermisosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToRegistroAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroAdminPage);
  }goToIniciarSesiN(params){
    if (!params) params = {};
    this.navCtrl.push(IniciarSesiNPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }goToUPSNecesitasPermisos(params){
    if (!params) params = {};
    this.navCtrl.push(UPSNecesitasPermisosPage);
  }goToHola(params){
    if (!params) params = {};
    this.navCtrl.push(HolaPage);
  }
}
