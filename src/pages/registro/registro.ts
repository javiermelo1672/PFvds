import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../../models/Usuario';
import { Persona } from '../../models/Persona';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import{PersonaService} from '../../services/Persona/persona-service';
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class RegistroPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  ids:string;
  userst= {} as Usuario;
  userCli={} as Persona;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private databases:AngularFireDatabase, private afAuth: AngularFireAuth,private usuariosser: PersonaService) {
  }

  async goToInicio(userst:Usuario,userCli:Persona)

  {

    
     
    
    
      try{

        const result=await this.afAuth.auth.createUserWithEmailAndPassword(userst.email,userst.password);
        this.ids=this.afAuth.auth.currentUser.uid;
        console.log(this.ids);
  
        //Obtener Fecha del Registro
        let date = new Date();
        
        userCli.Fecha_Registro=date;
        userCli.Tipo='Cliente';

        let sitio = {
         Edad:userCli.Edad,
         Fecha_Registro:userCli.Fecha_Registro,
         Foto: userCli.Foto,
         Num_Documento:userCli.Num_Documento,
         Num_Licencia: userCli.Num_Licencia,
         Foto_Licencia:userCli.Foto_Licencia,
         Foto_documento: userCli.Foto_documento,
         Telefono:userCli.Telefono,
         Nombre: userCli.Nombre,
         Tipo:userCli.Tipo
         
       }
       this.usuariosser.createUsuario(sitio,this.ids);
        
        
       let alert = this.alertCtrl.create({
        title: 'Enhorabuena :slightly_smiling:',
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
