import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HolaPage } from '../hola/hola';
import { HistorialPage } from '../historial/historial';
import { ConfiguraciNClientePage } from '../configuraci-ncliente/configuraci-ncliente';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HolaPage;
  tab2Root: any = HistorialPage;
  tab3Root: any = ConfiguraciNClientePage;
  constructor(public navCtrl: NavController) {
  }
  
}
