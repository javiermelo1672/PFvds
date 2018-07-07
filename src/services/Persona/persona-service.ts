import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Persona} from '../../models/Persona';

@Injectable()
export class PersonaService {


    private Usuariosref = this.db.list<Persona>('BasedeDatosF/Empresa/Persona/'); 
    private Usuariosespeci;

    constructor(private db: AngularFireDatabase){}
//Implementación Método para crear nuevo usuario
    createUsuario(sitio,id){

        
        this.db.database.ref('BasedeDatosF/Empresa/Persona/'+id).set(sitio);

    }
    getUsuarioList(){
        console.log(this.Usuariosref); 
        return this.Usuariosref;
    }

    getSpecificUser(id){
       this.Usuariosespeci= this.db.list<Persona>('BasedeDatosF/Empresa/Persona/',ref => ref.orderByKey().equalTo(id));
       return this.Usuariosespeci;
    }
    getSpecificUsers(parametro){
        this.Usuariosespeci= this.db.list<Persona>('BasedeDatosF/Empresa/Persona/',ref => ref.orderByChild('Tipo').equalTo(parametro));
        return this.Usuariosespeci;
     }
    
    editUsuarioItem(item:Persona,id){

        return this.Usuariosref.update(id,item);

    }
    removevaluekey()
    {

    }
    removeUsuarioItem(item:Persona){

        return this.Usuariosref.remove(item.key);
    }

}