import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapasPage } from '../mapas/mapas';
import { RutasPage } from '../rutas/rutas';

/**
 * Generated class for the TransportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transporte',
  templateUrl: 'transporte.html',
})
export class TransportePage {

  tab1Root = MapasPage;
  tab2Root = RutasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }

}
