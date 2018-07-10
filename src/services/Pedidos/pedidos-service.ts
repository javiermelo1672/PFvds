
import {Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';



import { Pedido} from '../../models/Pedido';
@Injectable()
export class PedidosService {


    private Pedidoref= this.db.list<Pedido>('/BasedeDatosF/Empresa/Pedido'); 
    

    constructor(private db: AngularFireDatabase){}
    
    addPedido(item:Pedido)
     {
         return this.Pedidoref.push(item);
     }
     getSpecificPedido(key)
        {
         return this.Pedidoref= this.db.list<Pedido>('/BasedeDatosF/Empresa/Pedido', ref=> ref.orderByChild('Usuario_Solicitud').equalTo(key));
             
        }

    
}