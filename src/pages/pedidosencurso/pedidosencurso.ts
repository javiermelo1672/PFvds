import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {PedidosService} from '../../services/Pedidos/pedidos-service';
import {Pedido} from '../../models/Pedido';
import { AngularFireAuth } from "angularfire2/auth";
import {Vehiculo} from '../../models/Vehiculos';
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
/**
 * Generated class for the PedidosencursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pedidosencurso',
  templateUrl: 'pedidosencurso.html',
})
export class PedidosencursoPage {
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
  items: Vehiculo= {
    Aseguradora: '',
    Capacidad: '',
    Color: '',
    Estado: '',
    Factor_de_Renta: '',
    Foto: '',
    Gama_Vehiculo: '',
    Informacion: '',
    Marca: '',
    Modelo: '',
    Placa: ''
  }
  vehiculoobj:Vehiculo;
  
  vehiculossreference$:Observable <Vehiculo[]>;
  pedidoobj:Pedido;
  ids:string;
  displayname:string;
  emails:string;
  pedidoreference$:Observable <Pedido[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth,private pedidoser: PedidosService,private vehiculosser:VehiculosService) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayname = null;        
        return;
      }
      
      this.emails=user.email;
          
    });
    
    this.ids=this.afAuth.auth.currentUser.uid;
    this.pedidoreference$=this.pedidoser.getSpecificPedido(this.ids).snapshotChanges()
    .map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });

     console.log(this.item.Vehiculo);
     
  }

 

}
