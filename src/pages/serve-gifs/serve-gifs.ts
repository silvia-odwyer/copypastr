import { Component, ChangeDetectorRef } from '@angular/core';
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
  public loadProgress = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    console.log('Looking for changes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServeGifsPage');


  }

  triggerSearch(event) {
    let search_term = event.target.value;
    if (search_term != "" || search_term.trim() != "") {
      this.loadProgress = 10;
      let time = 600;
      let search_time = 500;
      let timeout = window.setTimeout(() => {
        this.loadProgress += 10
      }, time);

      let searchTimeout = window.setTimeout(() => {
        this.searchGIFS(event);
      }, search_time)
    }
  }

  searchGIFS(event) {
    console.log(event.target.value);
    var loading_msg = document.querySelector(".loading_msg");

    let search_term = event.target.value;
    loading_msg.innerHTML = "Loading GIFS"

    this.loadProgress = 30;
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${search_term}&api_key=${this.giphy_api_key}&limit=40&rating=g`).map(res => res.json()).subscribe(data => {
      this.loadProgress = 50;
      // re-initialise the link array back to its empty state.
      this.link_array = [];

      //set the loading message to empty.
      loading_msg.innerHTML = "found gifs";

      let gif_results = data.data;
      let link_count = 0;
      for (let k = 0; link_count < 20; k += 1) {
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
      console.log(this.link_array);
      this.loadProgress = 100;


    });

  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
