import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-a-adir-tarjetas',
  templateUrl: 'a-adir-tarjetas.html'
})
export class AAdirTarjetasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
