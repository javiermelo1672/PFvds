import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//añadiendo servicio y modelo
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
import {Vehiculo} from '../../models/Vehiculos';
//añadiendo algunas dependencias de angularfire2,alert..
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AlertController} from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

//dff
@Component({
  selector: 'page-a-adir-veh-culo',
  templateUrl: 'a-adir-veh-culo.html'
})
export class AAdirVehCuloPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  item: Vehiculo= {
    Aseguradora: '',
    Capacidad: '',
    Color: '',
    Foto: '',
    Gasolina: '',
    Informacion: '',
    Marca: '',
    Modelo: '',
    Observaciones: '',
    Placa: ''
  } 
  vehiculosreference$:Observable <Vehiculo[]>;
  
  vehiculoobj={} as Vehiculo;
  
  constructor(public navCtrl: NavController, private databases:AngularFireDatabase, private vehiculosser:VehiculosService, private alertCtrl:AlertController) {
  
    this.vehiculosreference$= this.vehiculosser.getVehiculosList().snapshotChanges().map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });
  }

  addVehiculo(item:Vehiculo)
  {
    try{

      this.vehiculosser.addVehiculosItem(item).then(ref=>{
        console.log(ref.key);
  });
  let alert = this.alertCtrl.create({
    title: 'CORECTO',
    subTitle: 'El nuevo Item ha sido añadido a los vehiculos',
    buttons: ['Aceptar']

    
  });
  alert.present();
}
catch(e){
  let alert = this.alertCtrl.create({
    title: 'ERROR',
    subTitle: 'Intente de Nuevo',
    buttons: ['Aceptar']

    
  });
  alert.present();
}

  }
  

}
