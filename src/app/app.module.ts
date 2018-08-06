import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddEmojiPage,
    AddTextFacesPage,
    AddCatFacesPage,
    AddNumbersPage,
    FavouritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddEmojiPage,
    AddTextFacesPage,
    AddCatFacesPage,
    AddNumbersPage,
    FavouritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
