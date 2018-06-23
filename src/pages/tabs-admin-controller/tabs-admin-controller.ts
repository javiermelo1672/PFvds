import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HolaPage } from '../hola/hola';
import { HistorialPage } from '../historial/historial';
import { ConfiguraciNAdminPage } from '../configuraci-nadmin/configuraci-nadmin';
import { PanelInicialPage} from '../panel-inicial/panel-inicial';

@Component({
  selector: 'page-tabs-admin-controller',
  templateUrl: 'tabs-admin-controller.html'
})
export class TabsAdminControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PanelInicialPage;
  tab2Root: any = HistorialPage;
  tab3Root: any = ConfiguraciNAdminPage;
  constructor(public navCtrl: NavController) {
  }
  
}
