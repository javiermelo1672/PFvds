import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Noticias} from '../../models/Noticias';
@Injectable()
export class NoticiasService {


    private Noticiasref= this.db.list<Noticias>('/BasedeDatosF/Empresa/Promociones'); 
    

    constructor(private db: AngularFireDatabase){}

    getNoticiasList(){

        return this.Noticiasref;
    }

    
    editNoticiasItem(items:Noticias,id){

        return this.Noticiasref.update(id,items);

    }
    removeNoticiasItem(items:Noticias){

        return this.Noticiasref.remove(items.key);
    }
}