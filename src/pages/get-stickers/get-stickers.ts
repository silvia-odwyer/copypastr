import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import * as giphy_api_obj from "../../../env/giphy_api_key.json"
import { ChangeDetectorRef } from '@angular/core/src/change_detection/change_detector_ref';
import { getRandomNumber} from "../../modules/HelperUtils";

@Component({
  selector: 'page-get-stickers',
  templateUrl: 'get-stickers.html',
})

export class GetStickersPage {
  posts: any;
  public link_array = [];
  public cute_link_array = [];
  public weather_link_array = [];
  public effects_link_array = [];

  giphy_api_key = giphy_api_obj["api_key"];

  search_terms: any;
  public clipboard;
  public sticker_keywords = ["weather", "emoji", "magic", "tech"];
  public sticker_array = [];
  public reaction_link_array = [];

  public sticker_type;
  todo = {}
  logForm() {
    console.log(this.todo)
  }

  ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
    this.sticker_type = "emoji";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetGifsPage');
    this.clipboard = new Clipboard('.copy_link', {
      target: function (trigger) {
        return trigger;
      }
    });

    this.getEmojiStickers();
    this.getCuteStickers();
    this.getReactionStickers();
    this.getWeatherStickers();
    this.getEffectsStickers();

    this.clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      this.displayToast("error");
    });
  }
  

  getEmojiStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=emoji&api_key=${this.giphy_api_key}&limit=90&rating=g`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      let link_count = 0;
      for (let k = 0; link_count < 40; k += 1) {
        let ranIndex = getRandomNumber(0, this.posts.length - 1);
        let link = this.posts[ranIndex].images.original.url;
        if (this.link_array.indexOf(link) > -1 ){
          continue;
        }
        else {
          this.link_array.push(link);
          link_count += 1;
        }

      }
    });
  }

  getCuteStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=cute&api_key=${this.giphy_api_key}&limit=40`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      for (let k = 0; k < this.posts.length; k += 1) {
        let link = this.posts[k].images.original.url;
        this.cute_link_array.push(link);
      }
    });
  }

  getReactionStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/packs/2815?api_key=${this.giphy_api_key}`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log(this.posts);

      for (let k = 0; k < this.posts.length; k += 1) {
        let link = this.posts[k].images.original.url;
        this.reaction_link_array.push(link);
      }
    });
  }

  getWeatherStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=weather&api_key=${this.giphy_api_key}&limit=40`).map(res => res.json()).subscribe(data => {
      let out_data = data.data;


      for (let k = 0; k < out_data.length; k += 1) {
        let link = out_data[k].images.original.url;
        this.weather_link_array.push(link);
      }

    });
  }

  getEffectsStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=effects&api_key=${this.giphy_api_key}&limit=40`).map(res => res.json()).subscribe(data => {
      let out_data = data.data;

      for (let k = 0; k < out_data.length; k += 1) {
        let link = out_data[k].images.original.url;
        this.effects_link_array.push(link);
      }

    });
  }

  addToFavourites(item) {

  }

  displayToast(state) {
    let state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
    let toast = this.toastCtrl.create({
      message: state_dict[state],
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }
}