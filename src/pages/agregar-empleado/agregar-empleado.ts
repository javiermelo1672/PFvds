import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import{PersonaService} from '../../services/Persona/persona-service';
import { Usuario } from '../../models/Usuario';
import { Persona } from '../../models/Persona';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the AgregarEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agregar-empleado',
  templateUrl: 'agregar-empleado.html',
})
export class AgregarEmpleadoPage {
  ids:string;
  userst= {} as Usuario;
  userEmp={} as Persona;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private databases:AngularFireDatabase, private afAuth: AngularFireAuth,private usuariosser: PersonaService) {
  }
  async goToInicio(userst:Usuario,userEmp:Persona)
  
  {

    try{

      const result=await this.afAuth.auth.createUserWithEmailAndPassword(userst.email,userst.password);
      this.ids=this.afAuth.auth.currentUser.uid;
      console.log(this.ids);

      //Obtener Fecha del Registro
      let date = new Date();
      userEmp.Tipo='Administrador';

      let sitio = {
        Edad:userEmp.Edad,
        Fecha_Registro:'Nulll',
        Foto: userEmp.Foto,
        Foto_documento: userEmp.Foto_documento,
        Num_Documento:userEmp.Num_Documento,
        Telefono:userEmp.Telefono,
        Nombre: userEmp.Nombre,
        Tipo:userEmp.Tipo
       
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
