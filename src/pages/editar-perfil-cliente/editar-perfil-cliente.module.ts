import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPerfilClientePage } from './editar-perfil-cliente';

@NgModule({
  declarations: [
    EditarPerfilClientePage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPerfilClientePage),
  ],
})
export class EditarPerfilClientePageModule {}
