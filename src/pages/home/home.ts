import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddEmojiPage } from '../add-emoji/add-emoji';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {

  }

  getEmojiPage() {
    let addModal = this.modalCtrl.create(AddEmojiPage);

    addModal.present();
  }

}
