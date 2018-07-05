import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import{PersonaService} from '../../services/Persona/persona-service';
import { Usuario } from '../../models/Usuario';
import { Persona } from '../../models/Persona';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-registro-admin',
  templateUrl: 'registro-admin.html'
})
export class RegistroAdminPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  ids:string;
  usersts= {} as Usuario;
  userAdm={} as Persona;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private databases:AngularFireDatabase, private afAuth: AngularFireAuth,private usuariosser: PersonaService) {
  }
  async goToInicio(usersts:Usuario,userAdm:Persona)
  
  {

    try{

      const result=await this.afAuth.auth.createUserWithEmailAndPassword(usersts.email,usersts.password);
      this.ids=this.afAuth.auth.currentUser.uid;
      console.log(this.ids);

      //Obtener Fecha del Registro
      let date = new Date();
      userAdm.Tipo='Administrador';

      let sitio = {
       Edad:userAdm.Edad,
       Fecha_Registro:'Nulll',
       Foto: userAdm.Foto,
       Num_Documento:userAdm.Num_Documento,
       Telefono:userAdm.Telefono,
       Nombre: userAdm.Nombre,
       Tipo:userAdm.Tipo
       
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
