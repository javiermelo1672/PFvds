import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistorialPage } from '../historial/historial';
import { ConfiguraciNClientePage } from '../configuraci-ncliente/configuraci-ncliente';
import { PanelInicialPage} from '../panel-inicial/panel-inicial';
@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PanelInicialPage;
  tab2Root: any = HistorialPage;
  tab3Root: any = ConfiguraciNClientePage;
  constructor(public navCtrl: NavController) {
  }
  
}
