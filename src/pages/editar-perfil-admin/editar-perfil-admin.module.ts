import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPerfilAdminPage } from './editar-perfil-admin';

@NgModule({
  declarations: [
    EditarPerfilAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPerfilAdminPage),
  ],
})
export class EditarPerfilAdminPageModule {}
