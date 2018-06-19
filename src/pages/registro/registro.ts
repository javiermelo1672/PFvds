import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/Usuario';
import { UsuarioCliente } from '../../models/UsuarioCliente';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  ids:string;
  userst= {} as Usuario;
  userCli={} as UsuarioCliente;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private databases:AngularFireDatabase, private afAuth: AngularFireAuth) {
  }

  async goToInicio(userst:Usuario,userCli:UsuarioCliente)

  {

    
     
    
    
      try{

        const result=await this.afAuth.auth.createUserWithEmailAndPassword(userst.email,userst.password);
        this.ids=this.afAuth.auth.currentUser.uid;
        console.log(this.ids);

        
        let sitio = {
         Nombre: userCli.Nombre,
         Foto: userCli.Foto,
         NoDocumento:userCli.NoDocumento,
         NoLicencia: userCli.NoLicencia,
         FotoLicencia:userCli.FotoLicencia,
         FotoDocumento: userCli.FotoDocumento,
         Telefono:userCli.Telefono
         
       }
       
       this.databases.database.ref('UsuariosClientes/'+this.ids).set(sitio);
        
        
       let alert = this.alertCtrl.create({
        title: 'Enhorabuena',
        subTitle: 'Hola ya estás en VehicoldaApp',
        buttons: ['Aceptar']
      });
        
       this.navCtrl.push(TabsControllerPage);
       

      
     
       }
       catch(e){
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Por favor verifica la información ingresada',
          buttons: ['Aceptar']
        });
   
    
      }

  
}
  
}
