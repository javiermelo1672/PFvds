import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HolaPage } from '../pages/hola/hola';
import { PanelInicialPage } from '../pages/panel-inicial/panel-inicial';
import { HistorialPage } from '../pages/historial/historial';
import { PanelDeHistorialPage } from '../pages/panel-de-historial/panel-de-historial';
import { ConfiguraciNClientePage } from '../pages/configuraci-ncliente/configuraci-ncliente';
import { ConfiguraciNAdminPage } from '../pages/configuraci-nadmin/configuraci-nadmin';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';
import { RegistroPage } from '../pages/registro/registro';
import { EditarPerfilClientePage } from '../pages/editar-perfil-cliente/editar-perfil-cliente';
import { RegistroAdminPage } from '../pages/registro-admin/registro-admin';
import { EditarPerfilAdminPage } from '../pages/editar-perfil-admin/editar-perfil-admin';
import { UPSNecesitasPermisosPage } from '../pages/upsnecesitas-permisos/upsnecesitas-permisos';
import { HolaAdminPage } from '../pages/hola-admin/hola-admin';
import { AAdirTarjetasPage } from '../pages/a-adir-tarjetas/a-adir-tarjetas';
import { AAdirCuentaPage } from '../pages/a-adir-cuenta/a-adir-cuenta';
import { AAdirAseguradoraPage } from '../pages/a-adir-aseguradora/a-adir-aseguradora';
import { AAdirVehCuloPage } from '../pages/a-adir-veh-culo/a-adir-veh-culo';
import { CarrosPage } from '../pages/carros/carros';
import { CarrosAdminPage } from '../pages/carros-admin/carros-admin';

//Añadiendo librerias Angular fire para conexión con firebase

import { AngularFireModule } from 'angularfire2'; 
import {AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//añadir Firebase Connection 
import {FIREBASE_CONFIG} from './app.firebase.config';

//Importando servicios

import{UsuariosClienteService} from '../services/Usuarios/usuario-cliente-service';
import{NoticiasService} from '../services/Noticias/noticias-service';
import {VehiculosService} from '../services/Vehiculos/vehiculos-service';

@NgModule({
  declarations: [
    MyApp,
    HolaPage,
    PanelInicialPage,
    HistorialPage,
    PanelDeHistorialPage,
    ConfiguraciNClientePage,
    ConfiguraciNAdminPage,
    TabsControllerPage,
    IniciarSesiNPage,
    RegistroPage,
    EditarPerfilClientePage,
    RegistroAdminPage,
    EditarPerfilAdminPage,
    UPSNecesitasPermisosPage,
    HolaPage,
    HolaAdminPage,
    AAdirTarjetasPage,
    AAdirCuentaPage,
    AAdirAseguradoraPage,
    AAdirVehCuloPage,
    CarrosPage,
    CarrosAdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Añadiendo e inciializando la conexión con Firebase
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    //Añadiendo los rest api de auth y realtimedatabase
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HolaPage,
    PanelInicialPage,
    HistorialPage,
    PanelDeHistorialPage,
    ConfiguraciNClientePage,
    ConfiguraciNAdminPage,
    TabsControllerPage,
    IniciarSesiNPage,
    RegistroPage,
    EditarPerfilClientePage,
    RegistroAdminPage,
    EditarPerfilAdminPage,
    UPSNecesitasPermisosPage,
    HolaPage,
    HolaAdminPage,
    AAdirTarjetasPage,
    AAdirCuentaPage,
    AAdirAseguradoraPage,
    AAdirVehCuloPage,
    CarrosPage,
    CarrosAdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //añadiendo servicio
    UsuariosClienteService,
    NoticiasService,
    VehiculosService
  ]
})
export class AppModule {}