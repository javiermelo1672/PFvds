import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{UsuariosClienteService} from '../../services/Usuarios/usuario-cliente-service';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//ImplementandoModelos
import { UsuarioCliente } from '../../models/UsuarioCliente';
import { Noticias} from '../../models/Noticias';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

import{NoticiasService} from '../../services/Noticias/noticias-service';


import { AAdirVehCuloPage } from '../a-adir-veh-culo/a-adir-veh-culo';
import {ConfiguraciNClientePage} from '../configuraci-ncliente/configuraci-ncliente'
@Component({
  selector: 'page-hola',
  templateUrl: 'hola.html'
})
export class HolaPage {
  item: UsuarioCliente = {
    Nombre: ' ',
    Foto: ' ',
    NoDocumento:' ',
    NoLicencia:' ',
    FotoLicencia:' ',
    FotoDocumento:' ',
    Telefono: ' '
  }

  items: Noticias = {
    Titulo: ' ',
    Imagen: ' ',
    Contexto:' ',
  }

  ids:string;
  usuariosreference$: Observable <UsuarioCliente[]>;
  noticiasreference$: Observable <Noticias[]>;
  
  usariosobj:UsuarioCliente;
  Noticiasobj:Noticias;
  
  displayname:string;
  emails:string;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(private alertCtrl: AlertController,private afAuth: AngularFireAuth,public navCtrl: NavController,private databases:AngularFireDatabase,private usuariosser: UsuariosClienteService,private noticiasser: NoticiasService) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayname = null;        
        return;
      }
      
      this.emails=user.email;
          
    });
    this.ids=this.afAuth.auth.currentUser.uid;
    
    
    this.noticiasreference$ = this.noticiasser.getNoticiasList().valueChanges();
    this.usuariosreference$ = this.usuariosser.getSpecificUser(this.ids).valueChanges();
    
  }

  gotoVehiculos(){
    this.navCtrl.push(AAdirVehCuloPage);
  }
  gotoConfiguracion(){
    this.navCtrl.push(ConfiguraciNClientePage);
  }
}
