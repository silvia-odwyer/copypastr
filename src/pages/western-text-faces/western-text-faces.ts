import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-western-text-faces',
  templateUrl: 'western-text-faces.html',
})
export class WesternTextFacesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WesternTextFacesPage');
  }

}
