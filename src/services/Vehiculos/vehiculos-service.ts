import {Injectable } from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database';
import {Vehiculo} from '../../models/Vehiculos';

@Injectable()
export class VehiculosService {

    constructor(private db:AngularFireDatabase){}

    private vehiculosref= this.db.list<Vehiculo>('Vehiculos');

    getVehiculosList(){
        return this.vehiculosref;
    }
    
    addVehiculosItem(item:Vehiculo)
     {
         return this.vehiculosref.push(item);
     }

    updateVehiculosItem(item:Vehiculo)
    {
        return this.vehiculosref.update(item.key,item);
    }
    deleteVehiculosItem(item:Vehiculo)

    {
       return this.vehiculosref.remove(item.key);
    }





}

