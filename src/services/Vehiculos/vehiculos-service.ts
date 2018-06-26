import {Injectable } from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database';
import {Vehiculo} from '../../models/Vehiculos';

@Injectable()
export class VehiculosService {

    constructor(private db:AngularFireDatabase){}

    private vehiculosref= this.db.list<Vehiculo>('/BasedeDatosF/Empresa/Vehiculo');
    private vehiculosrefespecific;
    getVehiculosList(){
        return this.vehiculosref;
    }

    getSpecificVehiculo(gama)
    {
        return this.vehiculosrefespecific= this.db.list<Vehiculo>('/BasedeDatosF/Empresa/Vehiculo', ref=> ref.orderByChild('Gama_Vehiculo').equalTo(gama));
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

