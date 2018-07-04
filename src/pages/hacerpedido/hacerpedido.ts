import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Vehiculo} from '../../models/Vehiculos';
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
import {Observable} from 'rxjs/Observable';
import {PedidosService} from '../../services/Pedidos/pedidos-service';
import {Pedido} from '../../models/Pedido';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hacerpedido',
  templateUrl: 'hacerpedido.html',
})
export class HacerpedidoPage {
  item: Pedido= {
    Usuario_Solicitud: '',
    Usuario_Aprobo: '',
    Estado: '',
    Fecha_Inicio: '',
    Fecha_Final: '',
    Vehiculo: '',
    Codigo_checkout: '',
    estado_pago: '',
    Valor_pagado: ''
  }
  pedidoobj={} as Pedido;
  keys:string;
  vehiculoobj:Vehiculo;
  vehiculossreference$:Observable <Vehiculo[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private vehiculosser:VehiculosService, public pedidoser:PedidosService,private alertCtrl:AlertController) {
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


  AddPedidoSolicitud(item:Pedido)
  {
    
    try{
      item.Estado='0';
      item.estado_pago='sin pagar';
      item.
this.pedidoser.addPedido(item).then(ref=>{
  console.log(ref.key);
});
let alert = this.alertCtrl.create({
title: 'CORECTO',
subTitle: 'Correcto tu pedido ha sido creado',
buttons: ['Aceptar']


});
alert.present();
  }
  catch(e)
  {

  }

}
}

