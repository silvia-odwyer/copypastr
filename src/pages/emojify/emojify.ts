import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-emojify',
  templateUrl: 'emojify.html',
})
export class EmojifyPage {
  public text = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public username: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmojifyPage');
  }

  getFieldText(event) {
    console.log("Input change")
    console.log(event);
  }

  onChange(data) {
    console.log("input change")
    console.log(this.text);
    console.log(data)
  }

}
