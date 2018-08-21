import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-get-gifs',
  templateUrl: 'get-gifs.html',
})

@Component({
  template: `
    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>Add Todo</button>
    </form>
  `,
})

export class GetGifsPage {
  posts: any;
  public link_array = [];
  public cute_link_array = [];
  giphy_api_key = "b0EtnbCyVW6jKjVraEnITIGyiP2E624r";
  search_terms: any;
  public clipboard;
  todo = {}
  logForm() {
    console.log(this.todo)
  }
  
;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetGifsPage');
    this.clipboard = new Clipboard('.gif_container .link', {
      target: function (trigger) {
        return trigger;
      }
    });
    
    this.getEmojiStickers();
    this.getCuteStickers();



    this.clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      this.displayToast("error");
  });
  }

  getEmojiStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=emoji&api_key=${this.giphy_api_key}&limit=20`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log(this.posts);
      for (let k = 0; k < this.posts.length; k += 1) {
        let link = this.posts[k].images.original.url;
        this.link_array.push(link);
      }
    });
  }

  getCuteStickers() {
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=cute&api_key=${this.giphy_api_key}&limit=20`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log(this.posts);
      for (let k = 0; k < this.posts.length; k += 1) {
        let link = this.posts[k].images.original.url;
        this.cute_link_array.push(link);
      }
    });
  }

  addToFavourites(item) {
    
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