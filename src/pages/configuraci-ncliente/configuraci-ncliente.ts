import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AAdirTarjetasPage } from '../a-adir-tarjetas/a-adir-tarjetas';
import{PersonaService} from '../../services/Persona/persona-service';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//ImplementandoModelos
import { Persona } from '../../models/Persona';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular'
import {EditarPerfilClientePage} from '../editar-perfil-cliente/editar-perfil-cliente';
import {IniciarSesiNPage} from '../iniciar-sesi-n/iniciar-sesi-n';

@Component({
  selector: 'page-configuraci-ncliente',
  templateUrl: 'configuraci-ncliente.html'
})
export class ConfiguraciNClientePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  item: Persona = {
    Nombre: ' ',
    Foto: ' ',
    NoDocumento:' ',
    NoLicencia:' ',
    FotoLicencia:' ',
    FotoDocumento:' ',
    Telefono: ' '
  }
  id:string;
  usuariosreference$: Observable <Persona[]>;
  usariosobj:Persona;
  displayname:string;
  emails:string;
  constructor(private alertCtrl: AlertController,private afAuth: AngularFireAuth,public navCtrl: NavController,private databases:AngularFireDatabase,private usuariosser: PersonaService) {
  
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
  //Acción para cerrar sesión

  goToIniciarSesiN()
  {
   this.navCtrl.push(IniciarSesiNPage);
  }
  
}
