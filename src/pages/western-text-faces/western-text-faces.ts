import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-western-text-faces',
  templateUrl: 'western-text-faces.html',
})
export class WesternTextFacesPage {
  public western_happy_text_faces = [":‑)", ":)", ":-]", ":]", ":-3", ":3", ":->", ":>", "8-)", "8)", ":-}", ":}", ":o)", ":c)", ":^)", "=]", "=)" , ":‑D", ":D", 	"8‑D", "8D", "x‑D", "xD", "X‑D", "XD", "=D", "=3", "B^D", ":'‑)", ":')"];
  public western_sad_text_faces = [":‑(", ":(", ":‑c", ":c", ":‑<", ":<", ":‑[", ":[", ":-||", ">:[", ":{", ":@", ">:(", ":'‑(", ":'("];
  public western_angry_text_faces = [">.<", "v.v"];
  public western_cute_text_faces = [":‑P", ":P", "X‑P", "XP", "x‑p", "xp", ":‑p", ":p", ":‑Þ", ":Þ", ":‑þ", ":þ", ":‑b", ":b", "d:", "=p", ">:P"];
  public western_romance_text_faces = [":-*", ":*", ":×"]

  // Set active segment
  public west_category;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.west_category = "western_happy_text_faces";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WesternTextFacesPage');
  }

}
