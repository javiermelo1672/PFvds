import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//añadiendo servicio y modelo
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
import {AlertController} from 'ionic-angular';
import {Vehiculo} from '../../models/Vehiculos';
import { AAdirVehCuloPage } from '../a-adir-veh-culo/a-adir-veh-culo';
@IonicPage()
@Component({
  selector: 'page-editar-vehiculo',
  templateUrl: 'editar-vehiculo.html',
})
export class EditarVehiculoPage {

  vehiculoobj:Vehiculo;
  constructor(public navCtrl: NavController, public navParams: NavParams,private vehiculosser:VehiculosService,private alertCtrl:AlertController) {
  }

  ionViewWillLoad() {
    this.vehiculoobj=this.navParams.get('item');
  }
  updateVehiculo(vehiculoobj:Vehiculo)
  {

    try{
      this.vehiculosser.updateVehiculosItem(vehiculoobj).then(()=> {

        let alert = this.alertCtrl.create({
          title: 'CORECTO',
          subTitle: 'El  Item ha sido actualizado',
          buttons: ['Aceptar']
      
          
        });
        alert.present();
        this.navCtrl.push(AAdirVehCuloPage);
      });
    }
    catch(e)
    {
      let alert = this.alertCtrl.create({
        title: 'EROR',
        subTitle: 'El  Item NO ha sido actualizado',
        buttons: ['Aceptar']
    
        
      });
      alert.present();
    }

 
  }
  removeVehiculo(vehiculoobj:Vehiculo)
  {
    try{
      this.vehiculosser.deleteVehiculosItem(vehiculoobj).then(()=> {

        let alert = this.alertCtrl.create({
          title: 'CORRECTO',
          subTitle: 'El Item ha sido ELIMINADO',
          buttons: ['Aceptar']
      
          
        });
        alert.present();
        this.navCtrl.push(AAdirVehCuloPage);
      });
    }
    catch(e)
    {
      let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'El Item NO ha sido ELIMINADO',
        buttons: ['Aceptar']
    
        
      });
      alert.present();
    }
  }

}
