
import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';



import { Factor} from '../../models/Factor';
@Injectable()
export class FactorService {


    private Factorref= this.db.list<Factor>('/BasedeDatosF/Empresa/Factor'); 
    

    constructor(private db: AngularFireDatabase){}

    getFactorList(){

        return this.Factorref;
    }

    
    addFactorItem(item:Factor)
     {
         return this.Factorref.push(item);
     }

    editFactorItem(item:Factor,id){

        return this.Factorref.update(id,item);

    }
    removeFactorItem(item:Factor){

        return this.Factorref.remove(item.key);
    }
}