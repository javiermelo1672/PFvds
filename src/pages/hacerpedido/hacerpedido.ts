import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Vehiculo} from '../../models/Vehiculos';
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
import {Observable} from 'rxjs/Observable';
import {PedidosService} from '../../services/Pedidos/pedidos-service';
import {Pedido} from '../../models/Pedido';
/**
 * Generated class for the HacerpedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hacerpedido',
  templateUrl: 'hacerpedido.html',
})
export class HacerpedidoPage {
  
  pedidoobj={} as Pedido;
  keys:string;
  vehiculoobj:Vehiculo;
  vehiculossreference$:Observable <Vehiculo[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private vehiculosser:VehiculosService) {
    this.vehiculoobj=this.navParams.get('item');
    this.keys=this.vehiculoobj.key;
    console.log(this.keys);

    this.vehiculossreference$= this.vehiculosser.getSpecificTYPEVehiculo(this.keys).snapshotChanges().map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });

  }

  

}
