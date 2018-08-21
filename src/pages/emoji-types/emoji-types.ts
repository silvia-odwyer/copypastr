import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import emoji from 'emojilib';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-emoji-types',
  templateUrl: 'emoji-types.html',
})


export class EmojiTypesPage {
  public emoji_type;
  public emoji_lib = emoji.lib;
  public emotion_emoji_array = [];
  public ani_nature_emoji_array = [];
  public activities_emoji_array = [];
  public objects_emoji_array = [];
  public symbols_emoji_array = [];
  public travel_emoji_array = [];
  public flags_emoji_array = [];
  
  public favourites = [];
  public clipboard;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.emoji_type = "emotions";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmojiTypesPage');

    this.populateEmojiArray("people", this.emotion_emoji_array);
    this.populateEmojiArray("animals_and_nature", this.ani_nature_emoji_array);
    this.populateEmojiArray("activity", this.activities_emoji_array);
    this.populateEmojiArray("objects", this.objects_emoji_array);
    this.populateEmojiArray("symbols", this.symbols_emoji_array);
    this.populateEmojiArray("travel_and_places", this.travel_emoji_array)
    this.populateEmojiArray("flags", this.flags_emoji_array)
    this.initialiseClipboard();
  }

  populateEmojiArray(category, emoji_array) {
    let emoji_dict_keys = Object.keys(this.emoji_lib)

    for (let k = 0; k < emoji_dict_keys.length; k += 1) {
      let emoji = this.emoji_lib[emoji_dict_keys[k]];
      let em_category = emoji.category;
      if (em_category === category) {
        emoji_array.push(emoji.char);
      }
    }
  }

  initialiseClipboard() {
    this.clipboard = new Clipboard('.emoji_c', {
      target: function (trigger) {
        return trigger;
      }
    });

    this.clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      this.displayToast("error");
    });

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
