import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AAdirTarjetasPage } from '../a-adir-tarjetas/a-adir-tarjetas';
import{UsuariosClienteService} from '../../services/Usuarios/usuario-cliente-service';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//ImplementandoModelos
import { UsuarioCliente } from '../../models/UsuarioCliente';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular'
import {EditarPerfilClientePage} from '../editar-perfil-cliente/editar-perfil-cliente';


@Component({
  selector: 'page-configuraci-ncliente',
  templateUrl: 'configuraci-ncliente.html'
})
export class ConfiguraciNClientePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  item: UsuarioCliente = {
    Nombre: ' ',
    Foto: ' ',
    NoDocumento:' ',
    NoLicencia:' ',
    FotoLicencia:' ',
    FotoDocumento:' ',
    Telefono: ' '
  }
  id:string;
  usuariosreference$: Observable <UsuarioCliente[]>;
  usariosobj:UsuarioCliente;
  displayname:string;
  emails:string;
  constructor(private alertCtrl: AlertController,private afAuth: AngularFireAuth,public navCtrl: NavController,private databases:AngularFireDatabase,private usuariosser: UsuariosClienteService) {
  
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayname = null;        
        return;
      }
      
      this.emails=user.email;
          
    });
    this.id=this.afAuth.auth.currentUser.uid;
    this.usuariosreference$ = this.usuariosser.getSpecificUser(this.id).valueChanges();
  
  }
  goToAAdirTarjetas(){
    
    //hola
    this.navCtrl.push(AAdirTarjetasPage);
  }
  //Nuevo Comentario
  
}
