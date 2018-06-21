import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { UsuarioCliente} from '../../models/UsuarioCliente';
@Injectable()
export class UsuariosClienteService {


    private Usuariosref = this.db.list<UsuarioCliente>('UsuariosClientes'); 
    private Usuariosespeci;

    constructor(private db: AngularFireDatabase){}

    getUsuarioList(){
        console.log(this.Usuariosref); 
        return this.Usuariosref;
    }

    getSpecificUser(id){
       this.Usuariosespeci= this.db.list<UsuarioCliente>('/BasedeDatosF/Empresa/Usuarios/',ref => ref.orderByKey().equalTo(id));
       
       return this.Usuariosespeci;
    }
    
    editUsuarioItem(item:UsuarioCliente,id){

        return this.Usuariosref.update(id,item);

    }
    removeUsuarioItem(item:UsuarioCliente){

        return this.Usuariosref.remove(item.key);
    }

}