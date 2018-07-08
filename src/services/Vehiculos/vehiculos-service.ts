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
    
    addVehiculosItem(item:Vehiculo)
     {
         return this.vehiculosref.push(item);
     }
     getSpecificVehiculo(gama)
        {
         return this.vehiculosrefespecific= this.db.list<Vehiculo>('/BasedeDatosF/Empresa/Vehiculo', ref=> ref.orderByChild('Gama_Vehiculo').equalTo(gama);
             
        }
        getSpecificTYPEVehiculo(key)
        {
            return this.vehiculosrefespecific= this.db.list<Vehiculo>('/BasedeDatosF/Empresa/Vehiculo', ref=> ref.orderByKey().equalTo(key));
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

