import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-a-adir-cuenta',
  templateUrl: 'a-adir-cuenta.html'
})
export class AAdirCuentaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
