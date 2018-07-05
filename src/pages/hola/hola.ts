import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{PersonaService} from '../../services/Persona/persona-service';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//ImplementandoModelos
import {Persona } from '../../models/Persona';
import { Noticias} from '../../models/Noticias';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

import{NoticiasService} from '../../services/Noticias/noticias-service';


import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { TabsAdminControllerPage} from '../tabs-admin-controller/tabs-admin-controller';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-hola',
  templateUrl: 'hola.html'
})
export class HolaPage {
  item: Persona = {
    Edad:' ',
    Fecha_Registro:null,
    Foto: ' ',
    Num_Documento:' ',
    Num_Licencia:' ',
    Foto_Licencia:' ',
    Foto_documento:' ',
    Telefono: ' ',
    Nombre: ' ',
    Tipo: ' ',
    
  }

  items: Noticias = {
    Titulo: ' ',
    Imagen: ' ',
    Contexto:' '
  }

  ids:string;
  usuariosreference$: Observable <Persona[]>;
  noticiasreference$: Observable <Noticias[]>;
  
  usariosobj= {} as Persona;
  noticiasobj= {} as Noticias;

  displayname:string;
  emails:string;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,private afAuth: AngularFireAuth,public navCtrl: NavController,private databases:AngularFireDatabase,private usuariosser: PersonaService,private noticiasser: NoticiasService) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayname = null;        
        return;
      }
      
      this.emails=user.email;
          
    });
    
    this.ids=this.afAuth.auth.currentUser.uid;
    const loader = this.loadingCtrl.create({
      content: "Cargando Contenido"
    });

    loader.present().then(() => {
      this.noticiasreference$ = this.noticiasser.getNoticiasList().snapshotChanges()
    .map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });
    this.usuariosreference$ = this.usuariosser.getSpecificUser(this.ids).snapshotChanges()
    .map(
      changes =>{
        return changes.map(c =>({
          key: c.payload.key, ... c.payload.val()
        }));
      });
        
      loader.dismiss();
    });
    
    
  }

  gotoVistaCliente(){
    this.navCtrl.push(TabsControllerPage);
  }

  gotoVistaAdmin(){
    this.navCtrl.push(TabsAdminControllerPage);
  }
  
}
