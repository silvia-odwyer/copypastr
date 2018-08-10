import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cool-symbols',
  templateUrl: 'cool-symbols.html',
})

export class CoolSymbolsPage {
  public cool_symbols = ["⚖", "☆", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⚝", "✡", "☫", "☬", "☸", "✵", "❂", "☘", "♡", "♥", "❤", "⚘"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoolSymbolsPage');
  }

}
