import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TransportePage } from '../pages/transporte/transporte';
import { NoticiasPage } from '../pages/noticias/noticias';
import { AcademicoPage } from '../pages/academico/academico';
import { MapasPage } from '../pages/mapas/mapas';
import { RutasPage } from '../pages/rutas/rutas';
import { GoogleMaps }from '@ionic-native/google-maps';
import { GoogleMapComponent } from '../components/google-map/google-map'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TransportePage,
    NoticiasPage,
    AcademicoPage,
    MapasPage,
    RutasPage,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransportePage,
    NoticiasPage,
    AcademicoPage,
    MapasPage,
    RutasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // GoogleMap,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
