import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

import {Aseguradora} from  '../../models/Aseguradora';

@Injectable()
export class AseguradoraService {

    private Aseguradoraref= this.db.list<Aseguradora>('/BasedeDatosF/Empresa/Aseguradora'); 
    constructor(private db: AngularFireDatabase){}

      getAseguradoraItem()
      {

        return this.Aseguradoraref;
      }

}
