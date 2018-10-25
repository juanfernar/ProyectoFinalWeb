import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { App, ViewController } from 'ionic-angular';
import {NoticiasPage} from '../noticias/noticias';
import {AcademicoPage} from '../academico/academico';
import {TransportePage} from '../transporte/transporte';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticiasRoot = NoticiasPage;
  academicoRoot = AcademicoPage;
  transporteRoot = TransportePage;

  constructor(public navCtrl: NavController) { }

  pushPage(page){
    // this.viewCtrl.dismiss();
    if(page == '1'){
      this.navCtrl.push(this.noticiasRoot);
    }else if(page == '2'){
      this.navCtrl.push(this.academicoRoot);
    }else if(page == '3'){
      this.navCtrl.push(this.transporteRoot);
    }
  }

}
