import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import emoji from 'emojilib';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';

@Component({
  selector: 'page-add-emoji',
  templateUrl: 'add-emoji.html',
})

export class AddEmojiPage {

  public keywords = [];
  public emoji_lib = emoji.lib;
  public emoji_json_keys = Object.keys(this.emoji_lib);
  public favourite_emoji = [];
  public clipboard;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmojiPage');
    // let emoji_dict = this.emoji_dict;
    // let emoji_keys = this.emoji_keys;
    let fav_emoji_from_home = this.navParams.get("fav_emoji").fav_emoji
    console.log('UserId', this.navParams.get("fav_emoji"));
    this.favourite_emoji = fav_emoji_from_home;
    let emoji_elems = document.querySelectorAll(".emoji_c");

    this.clipboard = new Clipboard('.emoji_c', {
      target: function (trigger) {
        return trigger;
      }
    });

    this.clipboard.on('success', () => this.displayToast("success"));

    this.clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });

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
        message: 'Emoji copied!',
        duration: 1500,
        position: 'middle'
      });
    }
    else {
      this.favourite_emoji.push(item);
      console.log(this.favourite_emoji);

      // Display toast message
      toast = this.toastCtrl.create({
        message: 'Emoji copied & added to your favourites',
        duration: 1500,
        position: 'bottom'
      });
    }

    toast.present();
  }

  displayToast(state) {
    let state_dict = {"error" : "Error copying your emoji. Try again.", "success" : "Emoji copied & added to your favourites"};
    let toast = this.toastCtrl.create({
      message: state_dict[state],
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

  getEmoji(ev: any) {
    this.resetItems();
    const val = ev.target.value;
    const val_c = val;

    let no_emoji_elem = document.querySelector("#no_emoji_msg");
    no_emoji_elem.innerHTML = " ";
    let help_msg_elem = document.querySelector("#help_msg");

    if (val && val.trim() != '') {
      let res = this.filterEmojis(this.emoji_json_keys, val)
      console.log(res.length)

      // If no emojis were found
      if (res.length === 0) {
        let no_emoji_msgs = ["Sorry, no emojis found :(", "Either a data race happened, or we couldn't find any emojis.", "Damn, Daniel. No emojiiiis found. ;(", "Oh, fiddlesticks! No emojis found. :'(", "Oh, crap. Wow, we ... we couldn't find any emojis. Take this one instead. 🙂"];
        let randomNum = this.getRandomNumber(0, no_emoji_msgs.length - 1);
        let random_no_emoji_msg = no_emoji_msgs[randomNum];

        no_emoji_elem.innerHTML = random_no_emoji_msg;
        help_msg_elem.innerHTML = ""
        console.log("Res is zero")
      }
      else {
        help_msg_elem.innerHTML = "Just click on an emoji to copy it."
      }

      this.emoji_json_keys = res;
    }
  }

  filterEmojis(emoji_keys, val) {
    let res = this.emoji_json_keys.filter((item) => {
      return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
    return res;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}