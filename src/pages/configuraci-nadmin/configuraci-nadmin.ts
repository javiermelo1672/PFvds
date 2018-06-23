import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AAdirCuentaPage } from '../a-adir-cuenta/a-adir-cuenta';
import { AAdirAseguradoraPage } from '../a-adir-aseguradora/a-adir-aseguradora';
import { AAdirVehCuloPage } from '../a-adir-veh-culo/a-adir-veh-culo';
import { IniciarSesiNPage } from '../iniciar-sesi-n/iniciar-sesi-n';
import{PersonaService} from '../../services/Persona/persona-service';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../../models/Persona';
import { AlertController } from 'ionic-angular'
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'page-configuraci-nadmin',
  templateUrl: 'configuraci-nadmin.html'
})
export class ConfiguraciNAdminPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
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
  goToAAdirCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirCuentaPage);
  }
  goToAAdirAseguradora(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirAseguradoraPage);
  }
  goToAAdirVehCulo(params){
    if (!params) params = {};
    this.navCtrl.push(AAdirVehCuloPage);
  }
  
  goToIniciarSesiN()
  {
    this.navCtrl.push(IniciarSesiNPage);
   
  }
}
