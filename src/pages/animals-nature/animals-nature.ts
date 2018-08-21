import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import emoji from 'emojilib';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-emotion-emoji',
  templateUrl: 'animals-nature.html',
})
export class AnimalsNaturePage {
  public ani_nature_emoji_array = [];
  public emoji_lib = emoji.lib;
  public clipboard;
  public favourites = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    this.populateNatureEmojiArray();

    this.initialiseClipboard();
  }

  initialiseClipboard() {
    this.clipboard = new Clipboard('.emoji_c', {
      target: function (trigger) {
        return trigger;
      }
    });

    this.clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      this.displayToast("error");
  });
  }
  populateNatureEmojiArray() {
    let emoji_dict_keys = Object.keys(this.emoji_lib)

    for (let k = 0; k < emoji_dict_keys.length; k += 1) {
      let emoji = this.emoji_lib[emoji_dict_keys[k]];
      let em_category = emoji.category;
      if (em_category === "animals_and_nature") {
        this.ani_nature_emoji_array.push(emoji.char);
      }
    }
    console.log(this.ani_nature_emoji_array);

  }

  displayToast(state) {
    let state_dict = {"error" : "Error copying your emoji. Try again.", "success" : "Emoji copied & added to your favourites"};
    let toast = this.toastCtrl.create({
      message: state_dict[state],
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  addToFavourites(item) {
    this.favourites.push(item);
    this.displayToast("success");
  }

}
