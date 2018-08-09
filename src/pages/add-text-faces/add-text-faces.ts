import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddTextFacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-text-faces',
  templateUrl: 'add-text-faces.html',
})
export class AddTextFacesPage {
  public text_faces = ["( ͡° ͜ʖ ͡°)", "¯\\_(ツ)_/¯", "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)", "≧◡≦", "(▰˘◡˘▰)", "(▀̿Ĺ̯▀̿ ̿)", "(ง ͠° ͟ل͜ ͡°)ง","༼ つ ◕_◕ ༽つ", "ಠ_ಠ", "(づ｡ ◕‿‿◕｡) づ ", "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]]", "(∩︵∩)"];
  public sad_text_faces = ["v( ‘.’ )v", "●︿●", "◄.►", "◄︿►", "(◕︵◕)", "≧︵≦", " ͡°︵°"];
  public cute_text_faces = ["ʕ•ᴥ•ʔ", "(●´ω｀●)", , "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ✧ﾟ・: *ヽ(◕ヮ◕ヽ)", "ʕʘ‿ʘʔ", "(✿◠‿◠)", "(✿◠‿◠) *:・ﾟ✧ ✧"];
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTextFacesPage');
  }

  close() {
    this.view.dismiss();
  }

}
