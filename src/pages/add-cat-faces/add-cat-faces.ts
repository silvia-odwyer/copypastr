import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as cats from "cat-ascii-faces";

@Component({
  selector: 'page-add-cat-faces',
  templateUrl: 'add-cat-faces.html',
})
export class AddCatFacesPage {
  public cat_ascii_faces = cats.cats; // list of cat ascii faces

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCatFacesPage');
    console.log(this.cat_ascii_faces);

  }

}
