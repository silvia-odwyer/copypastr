import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddEmojiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-emoji',
  templateUrl: 'add-emoji.html',
})
export class AddEmojiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmojiPage');
  }

  close() {
    this.view.dismiss();
  }

}
