import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

import {Aseguradora} from  '../../models/Aseguradora';

@Injectable()
export class AseguradoraService {

    private Aseguradoraref= this.db.list<Aseguradora>('/BasedeDatosF/Empresa/Aseguradora'); 
    private  Aseguradorarefespecific
    constructor(private db: AngularFireDatabase){}

      getAseguradoraItem()
      {

        return this.Aseguradoraref;
      }

      addAseguradoraItem(item:Aseguradora)
      {
          return this.Aseguradoraref.push(item);
      }

      getSpecificAseguradora() {
        return this.Aseguradorarefespecific = this.db.list<Aseguradora>('/BasedeDatosF/Empresa/Aseguradora',
          ref => ref.orderByChild('Nombre').limitToFirst(5));
      }
      updateAseguradorasItem(item: Aseguradora) {
        return this.Aseguradoraref.update(item.key, item);
      }
      deleteAseguradorasItem(item: Aseguradora) {
        return this.Aseguradoraref.remove(item.key);
      }    

}
