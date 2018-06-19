import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AAdirTarjetasPage } from '../a-adir-tarjetas/a-adir-tarjetas';
import { IniciarSesiNPage } from '../iniciar-sesi-n/iniciar-sesi-n';
import { RegistroPage } from '../registro/registro';
import { UPSNecesitasPermisosPage } from '../upsnecesitas-permisos/upsnecesitas-permisos';
import { RegistroAdminPage } from '../registro-admin/registro-admin';
import { HolaPage } from '../hola/hola';

@Component({
  selector: 'page-configuraci-ncliente',
  templateUrl: 'configuraci-ncliente.html'
})
export class ConfiguraciNClientePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAAdirTarjetas(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirTarjetasPage);
  }goToIniciarSesiN(params){
    if (!params) params = {};
    this.navCtrl.push(IniciarSesiNPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }goToUPSNecesitasPermisos(params){
    if (!params) params = {};
    this.navCtrl.push(UPSNecesitasPermisosPage);
  }goToRegistroAdmin(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroAdminPage);
  }goToHola(params){
    if (!params) params = {};
    this.navCtrl.push(HolaPage);
  }
}
