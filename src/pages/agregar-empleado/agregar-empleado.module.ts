import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarEmpleadoPage } from './agregar-empleado';

@NgModule({
  declarations: [
    AgregarEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarEmpleadoPage),
  ],
})
export class AgregarEmpleadoPageModule {}
