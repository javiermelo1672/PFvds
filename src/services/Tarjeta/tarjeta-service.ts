import {Injectable } from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database';
import {Tarjeta} from '../../models/Tarjeta';

//Realizamos todas las importaciones pertinentes

@Injectable()
export class TarjetaService{
    private tarjetaRef= this.db.list<Tarjeta>('/BasedeDatosF/Empresa/Tarjeta');
    
    constructor(private db:AngularFireDatabase){}
    getTarjetaItem(){
        return this.tarjetaRef
    }
}