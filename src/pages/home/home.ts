import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddEmojiPage } from '../add-emoji/add-emoji';
import { AddTextFacesPage } from '../add-text-faces/add-text-faces';
import { AddCatFacesPage } from '../add-cat-faces/add-cat-faces';
import { AddNumbersPage } from '../add-numbers/add-numbers';
import { FavouritesPage } from '../favourites/favourites';
import { CoolSymbolsPage } from '../cool-symbols/cool-symbols';
import { GetGifsPage } from '../get-gifs/get-gifs';
import { StickerTab } from '../sticker-tab/sticker-tab';
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  addEmojiPage = AddEmojiPage;
  addTextFacesPage = AddTextFacesPage;
  addCatFacesPage = AddCatFacesPage;
  addNumbersPage = AddNumbersPage;
  favouritesPage = FavouritesPage;
  coolSymbolsPage = CoolSymbolsPage;
  getGIFSPage = GetGifsPage;

  public favourite_emoji = [];
  public media_type;
  tab1: any;
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {
    this.tab1 = StickerTab;
    this.media_type = "stickers";
  }

  getEmojiPage() {
    let object = {"fav_emoji" : this.favourite_emoji};

    let modal = this.modalCtrl.create(AddEmojiPage, {"fav_emoji" : object}, { cssClass: "modal-fullscreen" });

    modal.onDidDismiss((favourites) => {
 
          if(favourites){
           console.log(favourites);
           this.saveItem(favourites)
          }
    });
    modal.present();
   }

  getTextFacesPage() {
    let addModal = this.modalCtrl.create(AddTextFacesPage);

    addModal.present();
  }

  getFavouritesPage() {
	  this.navCtrl.push(FavouritesPage, {
      item: this.favourite_emoji
    });

  }

  saveItem(favourites) {
    this.favourite_emoji = favourites;
    console.log(this.favourite_emoji)
  }
}
