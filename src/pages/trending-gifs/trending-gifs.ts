import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http/';
import * as giphy_api_obj from "../../../env/giphy_api_key.json"
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { getRandomNumber} from "../../modules/HelperUtils";

@Component({
  selector: 'page-trending-gifs',
  templateUrl: 'trending-gifs.html',
})
export class TrendingGifsPage {
  public posts;
  public link_array = [];
  public giphy_api_key = giphy_api_obj["api_key"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrendingGifsPage');

    this.getTrendingGIFs();
  }

  getTrendingGIFs() {
    this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.giphy_api_key}&limit=30&rating=g`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      let link_count = 0;
      for (let k = 0; link_count < 20; k += 1) {
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
