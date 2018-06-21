import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Persona} from '../../models/Persona';
@Injectable()
export class UsuariosClienteService {


    private Usuariosref = this.db.list<Persona>('UsuariosClientes'); 
    private Usuariosespeci;

    constructor(private db: AngularFireDatabase){}

    getUsuarioList(){
        console.log(this.Usuariosref); 
        return this.Usuariosref;
    }

    getSpecificUser(id){
       this.Usuariosespeci= this.db.list<Persona>('/BasedeDatosF/Empresa/Usuarios/',ref => ref.orderByKey().equalTo(id));
       
       return this.Usuariosespeci;
    }
    
    editUsuarioItem(item:Persona,id){

        return this.Usuariosref.update(id,item);

    }
    removeUsuarioItem(item:Persona){

        return this.Usuariosref.remove(item.key);
    }

}