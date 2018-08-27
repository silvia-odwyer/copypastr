import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProgressBarComponent } from "../components/progress-bar/progress-bar";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddEmojiPage } from '../pages/add-emoji/add-emoji';
import { AddTextFacesPage } from '../pages/add-text-faces/add-text-faces';
import { AddCatFacesPage } from '../pages/add-cat-faces/add-cat-faces';
import { FavouritesPage } from '../pages/favourites/favourites';
import { CoolSymbolsPage } from '../pages/cool-symbols/cool-symbols';
import { GetGifsPage } from '../pages/get-gifs/get-gifs';
import { EmotionEmojiPage } from "../pages/emotion-emoji/emotion-emoji";
import { AnimalsNaturePage } from '../pages/animals-nature/animals-nature';
import { EmojiTypesPage } from '../pages/emoji-types/emoji-types';
import { WesternTextFacesPage } from '../pages/western-text-faces/western-text-faces';
import { EmojifyPage } from '../pages/emojify/emojify';
import { ServeGifsPage } from '../pages/serve-gifs/serve-gifs';
import { ChangeDetectorRef } from '@angular/core/src/change_detection/change_detector_ref';
import { SearchStickersPage } from '../pages/search-stickers/search-stickers';
import { TrendingGifsPage } from '../pages/trending-gifs/trending-gifs';
import { TrendingStickersPage } from '../pages/trending-stickers/trending-stickers';
import {GetStickersPage} from "../pages/get-stickers/get-stickers";

@NgModule({
  declarations: [
    MyApp,

    HomePage,
    AddEmojiPage,
    AddTextFacesPage,
    AddCatFacesPage,
    FavouritesPage,
    CoolSymbolsPage,
    GetStickersPage,
    SearchStickersPage,
    TrendingStickersPage,
    WesternTextFacesPage,
    EmotionEmojiPage,
    AnimalsNaturePage,
    ProgressBarComponent,
    ServeGifsPage,
    EmojifyPage,
    EmojiTypesPage,
    GetGifsPage,
    TrendingGifsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddEmojiPage,
    AddTextFacesPage,
    AddCatFacesPage,
    EmotionEmojiPage,
    EmojifyPage,
    ServeGifsPage,
    SearchStickersPage,
    TrendingStickersPage,
    GetStickersPage,
    WesternTextFacesPage,
    FavouritesPage,
    CoolSymbolsPage,
    ProgressBarComponent,
    GetGifsPage,
    AnimalsNaturePage,
    EmojiTypesPage,
    TrendingGifsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
