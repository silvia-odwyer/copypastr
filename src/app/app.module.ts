import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddEmojiPage } from '../pages/add-emoji/add-emoji';
import { AddTextFacesPage } from '../pages/add-text-faces/add-text-faces';
import { AddCatFacesPage } from '../pages/add-cat-faces/add-cat-faces';
import { AddNumbersPage } from '../pages/add-numbers/add-numbers';
import { FavouritesPage } from '../pages/favourites/favourites';
import { CoolSymbolsPage } from '../pages/cool-symbols/cool-symbols';
import { GetGifsPage } from '../pages/get-gifs/get-gifs';
import {StickerTab} from "../pages/sticker-tab/sticker-tab";
import {EmotionEmojiPage} from "../pages/emotion-emoji/emotion-emoji";
import { AnimalsNaturePage } from '../pages/animals-nature/animals-nature';
import { EmojiTypesPage } from '../pages/emoji-types/emoji-types';
import { WesternTextFacesPage } from '../pages/western-text-faces/western-text-faces';
import { EasternAnimatedStickersPage } from '../pages/eastern-animated-stickers/eastern-animated-stickers';
import { EmojifyPage } from '../pages/emojify/emojify';
import { ServeGifsPage } from '../pages/serve-gifs/serve-gifs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddEmojiPage,
    AddTextFacesPage,
    AddCatFacesPage,
    AddNumbersPage,
    FavouritesPage,
    CoolSymbolsPage,
    StickerTab,
    WesternTextFacesPage,
    EmotionEmojiPage,
    AnimalsNaturePage,
    ServeGifsPage,
    EmojifyPage,
    EmojiTypesPage,
    GetGifsPage,
    EasternAnimatedStickersPage
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
    StickerTab,
    EmotionEmojiPage,
    EmojifyPage,
    ServeGifsPage,
    AddNumbersPage,
    WesternTextFacesPage,
    EasternAnimatedStickersPage,
    FavouritesPage,
    CoolSymbolsPage,
    GetGifsPage,
    AnimalsNaturePage,
    EmojiTypesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
