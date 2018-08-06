import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import emoji from 'emojilib';

@Component({
  selector: 'page-add-emoji',
  templateUrl: 'add-emoji.html',
})
export class AddEmojiPage {
  public emoji_dict = { "happy": "😀", "grin": "😁", "lmao": "😂", "rofl": "🤣" };
  public emoji_keys = Object.keys(this.emoji_dict);
  public keywords = [];
  public emoji_lib = emoji.lib;
  public emoji_json_keys = Object.keys(this.emoji_lib);
  public favourite_emoji = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmojiPage');
    // let emoji_dict = this.emoji_dict;
    // let emoji_keys = this.emoji_keys;
    let fav_emoji_from_home = this.navParams.get("fav_emoji").fav_emoji
    console.log('UserId', this.navParams.get("fav_emoji"));
    this.favourite_emoji = fav_emoji_from_home;
  }

  close() {
    this.view.dismiss(this.favourite_emoji);
  }

  resetItems() {
    this.emoji_json_keys = Object.keys(this.emoji_lib);

  }

  addToFavourites(item) {
    let toast;
    if (this.favourite_emoji.indexOf(item) > -1) {
      toast = this.toastCtrl.create({
        message: 'Already in your favourites',
        duration: 2500,
        position: 'middle'
      });
    }
    else {
      this.favourite_emoji.push(item);
      console.log(this.favourite_emoji);

      // Display toast message
      toast = this.toastCtrl.create({
        message: 'Emoji added to your favourites',
        duration: 2500,
        position: 'bottom'
      });
    }



    toast.present();
  }

  getEmoji(ev: any) {
    this.resetItems();
    const val = ev.target.value;
    const val_c = val;

    if (val && val.trim() != '') {
      this.emoji_json_keys = this.emoji_json_keys.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

      // for (let i = 0; i < this.emoji_json_keys.length; i += 1) {
      //   let item = this.emoji_json[this.emoji_json_keys[i]];
      //   console.log(item)
      //   for (let j = 0; j < item.keywords.length; j += 1) {
      //     let keyword = item.keywords[j];
      //     if (keyword.toLowerCase() === val_c.toLowerCase()) {
      //       console.log("keyword found")
      //       this.emoji_json_keys.push(this.emoji_json_keys[i]);
      //     }
      //   }
      // }
    }
  }
}
