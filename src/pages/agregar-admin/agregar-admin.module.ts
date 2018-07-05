import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarAdminPage } from './agregar-admin';

@NgModule({
  declarations: [
    AgregarAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarAdminPage),
  ],
})
export class AgregarAdminPageModule {}
