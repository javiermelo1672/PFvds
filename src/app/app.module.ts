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
//Hola
//Se añaden tabs(vistas) para cada uno de los tipos de usuario
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import {TabsAdminControllerPage } from '../pages/tabs-admin-controller/tabs-admin-controller';


import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';
import { RegistroPage } from '../pages/registro/registro';
import { RegistroAdminPage } from '../pages/registro-admin/registro-admin';
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

import{PersonaService} from '../services/Persona/persona-service';
import{NoticiasService} from '../services/Noticias/noticias-service';
import {VehiculosService} from '../services/Vehiculos/vehiculos-service';
import {FactorService} from '../services/Factor/factor-service';

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
    TabsAdminControllerPage,
    IniciarSesiNPage,
    RegistroPage,
    RegistroAdminPage,
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
    TabsAdminControllerPage,
    IniciarSesiNPage,
    RegistroPage,
    RegistroAdminPage,
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
    PersonaService,
    NoticiasService,
    VehiculosService,
    FactorService
  ]
})
export class AppModule {}