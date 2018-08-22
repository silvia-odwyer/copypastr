import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as giphy_api_obj from "../../../env/giphy_api_key.json"

@Component({
  selector: 'page-serve-gifs',
  templateUrl: 'serve-gifs.html',
})
export class ServeGifsPage {
  public myInput: any;
  public link_array = [];
  public giphy_api_key = giphy_api_obj["api_key"];
  public results = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServeGifsPage');
  }

  searchGIFS(event) {
    console.log(event.target.value);
    let search_term = event.target.value;
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${search_term}&api_key=${this.giphy_api_key}&limit=90&rating=g`).map(res => res.json()).subscribe(data => {

      let gif_results = data.data;
      let link_count = 0;
      for (let k = 0; link_count < 40; k += 1) {
        let ranIndex = this.getRandomNumber(0, gif_results.length - 1);
        let link = gif_results[ranIndex].images.original.url;
        if (this.link_array.indexOf(link) > -1) {
          continue;
        }
        else {
          this.link_array.push(link);
          link_count += 1;
        }

      }
      console.log(this.link_array)
    });
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
