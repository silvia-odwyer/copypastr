import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-emoji',
  templateUrl: 'add-emoji.html',
})
export class AddEmojiPage {
  public emoji_dict = {"happy" : "😀", "grin" : "😁", "lmao" : "😂", "rofl" : "🤣"};
  public emoji_keys = Object.keys(this.emoji_dict);

  constructor(public navCtrl: NavController, public navParams: NavParams,  public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmojiPage');
    // let emoji_dict = this.emoji_dict;
    // let emoji_keys = this.emoji_keys;
  }

  close() {
    this.view.dismiss();
  }

  resetItems() {
    this.emoji_keys = Object.keys(this.emoji_dict);

  }

  getEmoji(ev: any) {
    const val = ev.target.value;
    this.resetItems();
    
    if (val && val.trim() != '') {
      this.emoji_keys = this.emoji_keys.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
