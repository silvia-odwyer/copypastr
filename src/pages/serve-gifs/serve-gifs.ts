import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as giphy_api_obj from "../../../env/giphy_api_key.json"
import { getRandomNumber} from "../../modules/HelperUtils";
import * as Clipboard from 'clipboard/dist/clipboard.min.js';

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
  public gif_display_count = 20; // The number of GIFs that should be displayed.
  public search_term = "";
  public clipboard;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    console.log('Looking for changes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServeGifsPage');

    this.clipboard = new Clipboard('.symbols', {
      target: function (trigger) {
        return trigger;
      }
    });


  }

  triggerSearch(event) {
    this.search_term = event.target.value;
    if (this.search_term != "" || this.search_term.trim() != "") {
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

    loading_msg.innerHTML = "Getting you GIFS"

    this.loadProgress = 30;
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${this.search_term}&api_key=${this.giphy_api_key}&limit=40&rating=g`).map(res => res.json()).subscribe(data => {
      this.loadProgress = 50;

      // re-initialise the link array back to its empty state.
      this.link_array = [];

      //set the loading message to empty.
      loading_msg.innerHTML = `GIFs related to ${this.search_term}`;

      let gif_results = data.data;
      if (gif_results.length === 0) {
        loading_msg.innerHTML = `No ${this.search_term} GIFS found :( Try again maybe?`
        this.loadProgress = 0;
      }
      else {
        if (gif_results.length < this.gif_display_count) {
          this.gif_display_count = gif_results.length;
        }
        let link_count = 0;
        for (let k = 0; link_count < 20; k += 1) {
          let ranIndex = getRandomNumber(0, gif_results.length - 1);
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


      }
    });
  }

}
