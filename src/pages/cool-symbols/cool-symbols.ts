import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';


@Component({
  selector: 'page-cool-symbols',
  templateUrl: 'cool-symbols.html',
})

export class CoolSymbolsPage {
  public cool_symbols = ["✓", "⚖", "☆", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⚝", "✡", "☫", "☬", "☸", "✵", "❂", "☘", "♡", "♥", "❤", "⚘", "❀","❃", "❁", "✼", "☀", "♫", "♪", "☃" , "❄", "❅", "❆", "☂", "❦" , "✈", "♕" , "♛", "♖", "♜", "☁",  "☾", "⍀", "⍁", "⍂", "⍃", "⍄", "⍅", "⍆", "⍇", "⍈", "⍉", "⍊", "⍋", "⍌", "⍍", "⍎", "⍏", "⍐", "⍑", "⍒" ,"⍓", "⍔", "⍕", "⍖", "⍗", "⍙", "⍚", "⍛", "⍜", "⍝", "⍞", "⍟", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏", "▐", "░", "▒", "▓", "▔", "▕", "▖", "▗",  "▘", "▙", "▚", "▛", "▜", "▝", "▞", "▟"]
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  public clipboard;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoolSymbolsPage');

    this.clipboard = new Clipboard('.symbols', {
      target: function (trigger) {
        return trigger;
      }
    });

    this.clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      this.displayToast("error");
  })

}

  addToFavourites(item) {
    let toast;

      // Display toast message
      toast = this.toastCtrl.create({
        message: 'Symbol copied & added to your favourites',
        duration: 1500,
        position: 'bottom'
      });

    toast.present();
  }

}
