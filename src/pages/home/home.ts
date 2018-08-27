import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddEmojiPage } from '../add-emoji/add-emoji';
import { AddTextFacesPage } from '../add-text-faces/add-text-faces';
import { AddCatFacesPage } from '../add-cat-faces/add-cat-faces';
import { FavouritesPage } from '../favourites/favourites';
import { CoolSymbolsPage } from '../cool-symbols/cool-symbols';
import { GetGifsPage } from '../get-gifs/get-gifs';
import { EmotionEmojiPage } from "../emotion-emoji/emotion-emoji"
import { AnimalsNaturePage } from "../animals-nature/animals-nature";
import { EmojiTypesPage } from '../emoji-types/emoji-types';
import { WesternTextFacesPage } from '../western-text-faces/western-text-faces';
import { EmojifyPage } from '../emojify/emojify';
import { ServeGifsPage } from '../serve-gifs/serve-gifs';
import { SearchStickersPage } from '../search-stickers/search-stickers';
import { TrendingGifsPage } from '../trending-gifs/trending-gifs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  addEmojiPage = AddEmojiPage;
  addTextFacesPage = AddTextFacesPage;
  addCatFacesPage = AddCatFacesPage;
  favouritesPage = FavouritesPage;
  coolSymbolsPage = CoolSymbolsPage;
  getGIFSPage = GetGifsPage;
  trendingGIFSPage = TrendingGifsPage;
  emotionEmojiPage = EmotionEmojiPage;
  searchStickersPage = SearchStickersPage;
  animalsNatureEmojiPage = AnimalsNaturePage;
  emojiTypesPage = EmojiTypesPage;
  westernTextFacesPage = WesternTextFacesPage;
  serveGIFSPage = ServeGifsPage;
  emojifyPage = EmojifyPage
  public favourite_emoji = [];
  public media_type;
  tab1: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.media_type = "stickers";
  }

  getEmojiPage() {
    let object = { "fav_emoji": this.favourite_emoji };

    let modal = this.modalCtrl.create(AddEmojiPage, { "fav_emoji": object }, { cssClass: "modal-fullscreen" });

    modal.onDidDismiss((favourites) => {

      if (favourites) {
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
