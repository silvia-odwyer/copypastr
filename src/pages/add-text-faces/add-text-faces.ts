import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController } from 'ionic-angular';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';

@Component({
  selector: 'page-add-text-faces',
  templateUrl: 'add-text-faces.html',
})
export class AddTextFacesPage {
  public text_faces = ["( ͡° ͜ʖ ͡°)", "¯\\_(ツ)_/¯", "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)", "≧◡≦", "(▰˘◡˘▰)", "(▀̿Ĺ̯▀̿ ̿)", "(ง ͠° ͟ل͜ ͡°)ง", "༼ つ ◕_◕ ༽つ", "ಠ_ಠ", "(づ｡ ◕‿‿◕｡) づ ", "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]]", "(∩︵∩)"];
  public sad_text_faces = ["(◡︿◡✿)", "(✖╭╮✖)", "(✖︿✖)", "(✖︵✖)", "(✖.✖)", "v( ‘.’ )v", "●︿●", "◄.►", "◄︿►", "(◕︵◕)", "≧︵≦", " ͡°︵°"];
  public romance_text_faces = ["(• ε •)", "(♥ ε ♥)", "(◕ ε ◕)", "♥‿♥", "(ﾉ◕ヮ◕)ﾉ*:・ﾟ♥ ✧ﾟ♥:ﾟ* ♥ﾟ✧ﾟヽ(◕ヮ◕ヽ)"]
  public cute_text_faces = ["~,~", "⊂◉‿◉つ", "●ᴥ●", "(◕‿◕✿)", "ʕ•ᴥ•ʔ", "(●´ω｀●)", , "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ✧ﾟ・: *ヽ(◕ヮ◕ヽ)", "ʕʘ‿ʘʔ", "(✿◠‿◠)", "(✿◠‿◠) *:・ﾟ✧ ✧"];
  public happy_text_faces = ["≖‿≖", "٩(^‿^)۶", "◕‿◕", "✖‿✖"];
  public angry_text_faces = ["►.◄", "{(>_<)}", "ˇ︿ˇ", ">.<",   
  `╔╦╦╦╗OMG\n
  ╠╬╬╬╣CHOCOLATE!!
  ╠╬╬╬╣Put this on your page
  ╠╬╬╬╣If you LOVE
  ╚╩╩╩╝♥ CHOCOLATE`,];
  
  public clipboard;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTextFacesPage');

    this.clipboard = new Clipboard('.text_faces', {
      target: function (trigger) {
        return trigger;
      }
    }); 

    this.clipboard.on('success', () => this.displayToast("success"));

    this.clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      this.displayToast("error");
  });
  }

  close() {
    this.view.dismiss();
  }

  displayToast(state) {
    let state_dict = {"error" : "Error copying the text face. Try again.", "success" : "Copied & added to your favourites"};
    let toast = this.toastCtrl.create({
      message: state_dict[state],
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

}