import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  giphy_api_key = "b0EtnbCyVW6jKjVraEnITIGyiP2E624r";
  search_terms: any;

  todo = {}
  logForm() {
    console.log(this.todo)
  }
  
;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetGifsPage');
    this.http.get(`http://api.giphy.com/v1/stickers/search?q=emoticons&api_key=${this.giphy_api_key}&limit=20`).map(res => res.json()).subscribe(data => {
      this.posts = data.data;
      console.log(this.posts);
      for (let k = 0; k < this.posts.length; k += 1) {
        let link = this.posts[k].images.original.url;
        this.link_array.push(link);
      }
    });
  }

  addToFavourites(item) {
    
  }
}