import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import emoji from "emojilib";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  public favourite_emoji = [];
  public emoji_lib = emoji.lib;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');

    this.favourite_emoji = this.navParams.get('item');
    console.log(this.favourite_emoji);
  }

}
