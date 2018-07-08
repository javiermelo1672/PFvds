import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import{PersonaService}  from '../../services/Persona/persona-service';
import {AlertController} from 'ionic-angular';
import {Persona } from '../../models/Persona';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the VerusuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verusuarios',
  templateUrl: 'verusuarios.html',
})
export class VerusuariosPage {
  usuariosobj:Persona;
  item: Persona = {
    Edad:' ',
    Fecha_Registro:'',
    Foto: ' ',
    Num_Documento:' ',
    Num_Licencia:' ',
    Foto_documento:' ',
    Foto_Licencia: ' ',
    Telefono: ' ',
    Nombre: ' ',
    Tipo: ' ',
    
  }
  usuariosreference$: Observable <Persona[]>;
  usuarios1reference$: Observable <Persona[]>;
  usuarios2reference$: Observable <Persona[]>;
  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private personaser:PersonaService,private alertCtrl:AlertController) {
    this.usuariosreference$ = this.personaser.getSpecificUsers('Administrador').snapshotChanges()
    .map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });
      this.usuarios1reference$ = this.personaser.getSpecificUsers('Empleado').snapshotChanges()
      .map(
        changes =>{
          return changes.map(c =>({
            key: c.payload.key, ... c.payload.val()
          }));
        });
        this.usuarios2reference$ = this.personaser.getSpecificUsers('Cliente').snapshotChanges()
      .map(
        changes =>{
          return changes.map(c =>({
            key: c.payload.key, ... c.payload.val()
          }));
        });
  
  }
  

  ionViewWillLoad() {
    this.usuariosobj=this.navParams.get('item');
  }

  loadUsuarios(personaobj:Persona){
    this.personaser.getUsuarioList();
    this.navCtrl.push(VerusuariosPage);
  
}

  }


