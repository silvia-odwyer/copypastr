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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.emoji_type = "emotions";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmojiTypesPage');

    this.populateEmojiArray("people", this.emotion_emoji_array);
    this.populateEmojiArray("animals_and_nature", this.ani_nature_emoji_array);

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

}
