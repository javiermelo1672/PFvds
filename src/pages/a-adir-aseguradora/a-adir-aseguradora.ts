import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//añadiendo servicio y modelo
import {AseguradoraService} from '../../services/Aseguradora/aseguradora-service';
import {Aseguradora} from  '../../models/Aseguradora';
//añadiendo algunas dependencias de angularfire2,alert..
// añadiendo otras dependencias
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AlertController} from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';


@Component({
  selector: 'page-a-adir-aseguradora',
  templateUrl: 'a-adir-aseguradora.html'
})
export class AAdirAseguradoraPage {
 
  items: Aseguradora= {
    Codigo:'',
    Fecha_Inicio:'',
    Fecha_Vencimiento:'',
    Nombre:''
   
  } 
  aseguradorareference$:Observable <Aseguradora[]>;
  aseguradoraobj={} as Aseguradora;
  
 
  constructor(public navCtrl: NavController,
     private databases:AngularFireDatabase,
     private aseguradoraser:AseguradoraService,
      private alertCtrl:AlertController) {
  
        this.aseguradorareference$=this.aseguradoraser.getAseguradoraItem().snapshotChanges().map(
        changes =>{
          return changes.map(c =>({
            key: c.payload.key, ... c.payload.val()
          }));
        });
        
      }
    
  addAseguradora(item:Aseguradora){
  try{

    this.aseguradoraser.addAseguradoraItem(item).then(ref=>{
      console.log(ref.key);
});
let alert = this.alertCtrl.create({
  title: 'Registro éxitoso',
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
  }}
