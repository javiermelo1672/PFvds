import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Noticias} from '../../models/Noticias';
@Injectable()
export class NoticiasService {


    private Noticiasref= this.db.list<Noticias>('NoticiasApp'); 
    

    constructor(private db: AngularFireDatabase){}

    getNoticiasList(){

        return this.Noticiasref;
    }

    
    editNoticiasItem(item:Noticias,id){

        return this.Noticiasref.update(id,item);

    }
    removeNoticiasItem(item:Noticias){

        return this.Noticiasref.remove(item.key);
    }
}