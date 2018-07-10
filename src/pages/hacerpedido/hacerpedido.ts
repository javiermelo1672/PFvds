import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Vehiculo} from '../../models/Vehiculos';
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
import {Observable} from 'rxjs/Observable';
import {PedidosService} from '../../services/Pedidos/pedidos-service';
import {Pedido} from '../../models/Pedido';
import {AlertController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { PanelInicialPage } from '../../pages/panel-inicial/panel-inicial';
@IonicPage()
@Component({
  selector: 'page-hacerpedido',
  templateUrl: 'hacerpedido.html',
})
export class HacerpedidoPage {
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
  valorstring:string;
  valorint:number;
  displayname:string;
  emails:string;
  ids:string;
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,private vehiculosser:VehiculosService, public pedidoser:PedidosService,private alertCtrl:AlertController) {
    this.vehiculoobj=this.navParams.get('item');
    this.keys=this.vehiculoobj.key;
    console.log(this.keys);
     
    this.vehiculossreference$= this.vehiculosser.getSpecificTYPEVehiculo(this.keys).snapshotChanges().map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
        
      });

      this.valorstring=this.vehiculoobj.Factor_de_Renta.toString();
      this.valorint= Number(this.valorstring);
      console.log(this.valorint);
      this.valorint=(this.valorint*100000)+3500+100000;
      console.log(this.valorint);
      this.vehiculoobj.Factor_de_Renta=this.valorint.toString();
      
       



  }


  AddPedidoSolicitud(item:Pedido,items:Vehiculo)
  {
    
    try{
      this.afAuth.authState.subscribe(user => {
        if (!user) {
          this.displayname = null;        
          return;
        }
        
        this.emails=user.email;
            
      });
      
      this.ids=this.afAuth.auth.currentUser.uid;
      item.Estado='En espera';
      item.estado_pago='Sin pagar';
      item.Vehiculo=this.vehiculoobj.key;
      item.Valor_pagado=this.vehiculoobj.Factor_de_Renta;
      item.Usuario_Solicitud=this.ids;
      item.Usuario_Aprobo='Sin Asignar';
      item.Codigo_checkout='Sin Asignar';
      items.Estado='No disponible'
      items.Factor_de_Renta= this.valorstring;
this.vehiculosser.updateVehiculosItem(items).then(ref=>{
});
this.pedidoser.addPedido(item).then(ref=>{
  console.log(ref.key);
});

let alert = this.alertCtrl.create({
title: 'CORECTO',
subTitle: 'Correcto tu pedido ha sido creado',
buttons: ['Aceptar']
 

});
alert.present();
this.navCtrl.push( PanelInicialPage);
  }
  catch(e)
  {

  }

}
}

