import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as cats from "cat-ascii-faces";
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-add-cat-faces',
  templateUrl: 'add-cat-faces.html',
})
export class AddCatFacesPage {
  public cat_ascii_faces = cats.cats; // list of cat ascii faces
  public clipboard;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCatFacesPage');
    console.log(this.cat_ascii_faces);
    this.initialiseClipboard();
  }

  initialiseClipboard() {
    this.clipboard = new Clipboard('.western_text_faces', {
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

  displayToast(state) {
    let state_dict = {"error" : "Error copying your emoji. Try again.", "success" : "Emoji copied & added to your favourites"};
    let toast = this.toastCtrl.create({
      message: state_dict[state],
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

}
