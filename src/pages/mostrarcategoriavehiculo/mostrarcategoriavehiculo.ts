import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Factor} from '../../models/Factor';
import {VehiculosService} from '../../services/Vehiculos/vehiculos-service';
import {Vehiculo} from '../../models/Vehiculos';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AlertController} from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
/**
 * Generated class for the MostrarcategoriavehiculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrarcategoriavehiculo',
  templateUrl: 'mostrarcategoriavehiculo.html',
})
export class MostrarcategoriavehiculoPage {

  factorobj:Factor;
  gama:string;
  vehiculosreference$:Observable <Vehiculo[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private databases:AngularFireDatabase, private vehiculosser:VehiculosService) {
    this.factorobj=this.navParams.get('item');
    this.gama=this.factorobj.Nombre;
    this.vehiculosreference$= this.vehiculosser.getSpecificVehiculo(this.gama).snapshotChanges().map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });
  }

  

}
