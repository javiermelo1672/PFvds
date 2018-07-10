import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Factor} from '../../models/Factor';
import {FactorService} from '../../services/Factor/factor-service';
import {Observable} from 'rxjs/Observable';
import {AlertController} from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import { PedidosencursoPage } from '../../pages/pedidosencurso/pedidosencurso';
@Component({
  selector: 'page-panel-inicial',
  templateUrl: 'panel-inicial.html'
})
export class PanelInicialPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  item: Factor= {
    Contexto: ' ',
    Foto: ' ',
    Nombre: ' ',
    Porcentaje: ' '
  } 
  Factorreference$:Observable <Factor[]>;
  
  factorobj={} as Factor;
  constructor(public navCtrl: NavController, private databases:AngularFireDatabase, private factorser:FactorService, private alertCtrl:AlertController) {
  
    this.Factorreference$= this.factorser.getFactorList().snapshotChanges().map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });
  
  }
  goTopedidos(params){
    if (!params) params = {};
    this.navCtrl.push(PedidosencursoPage);
  }
  
}
