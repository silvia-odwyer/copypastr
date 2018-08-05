import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddEmojiPage } from '../add-emoji/add-emoji';
import { AddTextFacesPage } from '../add-text-faces/add-text-faces';
import { AddCatFacesPage } from '../add-cat-faces/add-cat-faces';
import { AddNumbersPage } from '../add-numbers/add-numbers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addEmojiPage = AddEmojiPage;
  addTextFacesPage = AddTextFacesPage;
  addCatFacesPage = AddCatFacesPage;
  addNumbersPage = AddNumbersPage;

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {

  }

  getEmojiPage() {
    let addModal = this.modalCtrl.create(AddEmojiPage);

    addModal.present();
  }

  getTextFacesPage() {
    let addModal = this.modalCtrl.create(AddTextFacesPage);

    addModal.present();
  }

}
