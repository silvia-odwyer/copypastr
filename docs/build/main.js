webpackJsonp([0],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_emoji_add_emoji__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_text_faces_add_text_faces__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_cat_faces_add_cat_faces__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favourites_favourites__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cool_symbols_cool_symbols__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__get_gifs_get_gifs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__emotion_emoji_emotion_emoji__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animals_nature_animals_nature__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__emoji_types_emoji_types__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__western_text_faces_western_text_faces__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__emojify_emojify__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__serve_gifs_serve_gifs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_stickers_search_stickers__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trending_gifs_trending_gifs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__get_stickers_get_stickers__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.addEmojiPage = __WEBPACK_IMPORTED_MODULE_2__add_emoji_add_emoji__["a" /* AddEmojiPage */];
        this.addTextFacesPage = __WEBPACK_IMPORTED_MODULE_3__add_text_faces_add_text_faces__["a" /* AddTextFacesPage */];
        this.addCatFacesPage = __WEBPACK_IMPORTED_MODULE_4__add_cat_faces_add_cat_faces__["a" /* AddCatFacesPage */];
        this.favouritesPage = __WEBPACK_IMPORTED_MODULE_5__favourites_favourites__["a" /* FavouritesPage */];
        this.coolSymbolsPage = __WEBPACK_IMPORTED_MODULE_6__cool_symbols_cool_symbols__["a" /* CoolSymbolsPage */];
        this.getGIFSPage = __WEBPACK_IMPORTED_MODULE_7__get_gifs_get_gifs__["a" /* GetGifsPage */];
        this.trendingGIFSPage = __WEBPACK_IMPORTED_MODULE_15__trending_gifs_trending_gifs__["a" /* TrendingGifsPage */];
        this.emotionEmojiPage = __WEBPACK_IMPORTED_MODULE_8__emotion_emoji_emotion_emoji__["a" /* EmotionEmojiPage */];
        this.searchStickersPage = __WEBPACK_IMPORTED_MODULE_14__search_stickers_search_stickers__["a" /* SearchStickersPage */];
        this.animalsNatureEmojiPage = __WEBPACK_IMPORTED_MODULE_9__animals_nature_animals_nature__["a" /* AnimalsNaturePage */];
        this.emojiTypesPage = __WEBPACK_IMPORTED_MODULE_10__emoji_types_emoji_types__["a" /* EmojiTypesPage */];
        this.westernTextFacesPage = __WEBPACK_IMPORTED_MODULE_11__western_text_faces_western_text_faces__["a" /* WesternTextFacesPage */];
        this.serveGIFSPage = __WEBPACK_IMPORTED_MODULE_13__serve_gifs_serve_gifs__["a" /* ServeGifsPage */];
        this.emojifyPage = __WEBPACK_IMPORTED_MODULE_12__emojify_emojify__["a" /* EmojifyPage */];
        this.getStickersPage = __WEBPACK_IMPORTED_MODULE_16__get_stickers_get_stickers__["a" /* GetStickersPage */];
        this.favourite_emoji = [];
        this.media_type = "stickers";
    }
    HomePage.prototype.getEmojiPage = function () {
        var _this = this;
        var object = { "fav_emoji": this.favourite_emoji };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_emoji_add_emoji__["a" /* AddEmojiPage */], { "fav_emoji": object }, { cssClass: "modal-fullscreen" });
        modal.onDidDismiss(function (favourites) {
            if (favourites) {
                console.log(favourites);
                _this.saveItem(favourites);
            }
        });
        modal.present();
    };
    HomePage.prototype.getTextFacesPage = function () {
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_text_faces_add_text_faces__["a" /* AddTextFacesPage */]);
        addModal.present();
    };
    HomePage.prototype.getFavouritesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__favourites_favourites__["a" /* FavouritesPage */], {
            item: this.favourite_emoji
        });
    };
    HomePage.prototype.saveItem = function (favourites) {
        this.favourite_emoji = favourites;
        console.log(this.favourite_emoji);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      CopyPastr v0.71\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="media_type" color="secondary" value="stickers" isActive>\n\n      <ion-segment-button value="stickers">\n\n        Stickers\n\n      </ion-segment-button>\n\n      <ion-segment-button value="emoji">\n\n        Emoji\n\n      </ion-segment-button>\n\n      <ion-segment-button value="gifs">\n\n        GIFs\n\n      </ion-segment-button>\n\n      <ion-segment-button value="text_faces">\n\n        Text Faces\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-toolbar>\n\n\n\n    <div [ngSwitch]="media_type">\n\n      <ion-list *ngSwitchCase="\'stickers\'">\n\n        <ion-item [navPush]="getStickersPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="images" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Animated Stickers</h2>\n\n        </ion-item>\n\n\n\n        <ion-item [navPush]="searchStickersPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="paper-plane" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Search Stickers</h2>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'emoji\'">\n\n        <ion-item (click)="getEmojiPage()">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="search" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Search All Emoji</h2>\n\n        </ion-item>\n\n\n\n        <ion-item [navPush]="emojiTypesPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="heart" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Emoji Types</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'gifs\'">\n\n        <ion-item [navPush]="serveGIFSPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="search" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Search for GIFS</h2>\n\n        </ion-item>\n\n\n\n        <ion-item [navPush]="trendingGIFSPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="trending-up" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Trending GIFS</h2>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'text_faces\'">\n\n        <ion-item [navPush]="westernTextFacesPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="happy" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Western Text Faces</h2>\n\n        </ion-item>\n\n\n\n        <ion-item [navPush]="addTextFacesPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="outlet" item-start></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Eastern Text Faces</h2>\n\n        </ion-item>\n\n\n\n        <ion-item [navPush]="coolSymbolsPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="heart"></ion-icon>\n\n          </ion-thumbnail>\n\n          <h2>Text Symbols</h2>\n\n        </ion-item>\n\n\n\n        <ion-item [navPush]="addCatFacesPage">\n\n          <ion-thumbnail item-start>\n\n            <ion-icon name="arrow-dropup"></ion-icon>        \n\n            <ion-icon name="arrow-dropup"></ion-icon>          \n\n  \n\n          </ion-thumbnail>\n\n          <h2>Cat Faces</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n    </div>\n\n  </ion-toolbar>\n\n  <ion-fab top right (click)="getFavouritesPage()">\n\n    <button ion-fab mini>\n\n      <ion-icon name="heart"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmojiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emojilib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_HelperUtils__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEmojiPage = /** @class */ (function () {
    function AddEmojiPage(navCtrl, navParams, view, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.keywords = [];
        this.emoji_lib = __WEBPACK_IMPORTED_MODULE_2_emojilib___default.a.lib;
        this.emoji_json_keys = [];
        this.favourite_emoji = [];
    }
    AddEmojiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEmojiPage');
        // let emoji_dict = this.emoji_dict;
        // let emoji_keys = this.emoji_keys;
        var fav_emoji_from_home = this.navParams.get("fav_emoji").fav_emoji;
        console.log('UserId', this.navParams.get("fav_emoji"));
        this.favourite_emoji = fav_emoji_from_home;
        var emoji_elems = document.querySelectorAll(".emoji_c");
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__('.emoji_c', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    AddEmojiPage.prototype.close = function () {
        this.view.dismiss(this.favourite_emoji);
    };
    AddEmojiPage.prototype.resetItems = function () {
        this.emoji_json_keys = Object.keys(this.emoji_lib);
    };
    AddEmojiPage.prototype.addToFavourites = function (item) {
        var toast;
        if (this.favourite_emoji.indexOf(item) > -1) {
            toast = this.toastCtrl.create({
                message: 'Emoji copied!',
                duration: 1500,
                position: 'middle'
            });
        }
        else {
            this.favourite_emoji.push(item);
            console.log(this.favourite_emoji);
            // Display toast message
            toast = this.toastCtrl.create({
                message: 'Emoji copied & added to your favourites',
                duration: 1500,
                position: 'bottom'
            });
        }
        toast.present();
    };
    AddEmojiPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    AddEmojiPage.prototype.getEmoji = function (ev) {
        this.emoji_json_keys = Object.keys(this.emoji_lib);
        this.resetItems();
        var val = ev.target.value;
        var val_c = val;
        var no_emoji_elem = document.querySelector("#no_emoji_msg");
        no_emoji_elem.innerHTML = " ";
        var help_msg_elem = document.querySelector("#help_msg");
        if (val && val.trim() != '') {
            var res = this.filterEmojis(this.emoji_json_keys, val);
            console.log(res.length);
            // If no emojis were found
            if (res.length === 0) {
                var no_emoji_msgs = ["Sorry, no emojis found :(", "Either a data race happened, or we couldn't find any emojis.", "Damn, Daniel. No emojiiiis found. ;(", "Oh, fiddlesticks! No emojis found. :'(", "Oh, crap. Wow, we ... we couldn't find any emojis. Take this one instead. 🙂"];
                var randomNum = Object(__WEBPACK_IMPORTED_MODULE_4__modules_HelperUtils__["a" /* getRandomNumber */])(0, no_emoji_msgs.length - 1);
                var random_no_emoji_msg = no_emoji_msgs[randomNum];
                no_emoji_elem.innerHTML = random_no_emoji_msg;
                help_msg_elem.innerHTML = "";
                console.log("Res is zero");
            }
            else {
                help_msg_elem.innerHTML = "Search for emoji using the searchbar above, eg: eyes";
            }
            this.emoji_json_keys = res;
        }
    };
    AddEmojiPage.prototype.filterEmojis = function (emoji_keys, val) {
        var res = this.emoji_json_keys.filter(function (item) {
            return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
        return res;
    };
    AddEmojiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-emoji',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\add-emoji\add-emoji.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Copy & Paste Emoji</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="selectable">\n  \n    <ion-fab top left (click)="close()">\n        <button ion-fab mini><ion-icon name="close-circle"></ion-icon></button>\n      </ion-fab>\n    <ion-searchbar (ionInput)="getEmoji($event)"></ion-searchbar>\n\n    <p id="help_msg">Just click on an emoji to copy it.</p>\n    <section class="single_symbols">\n      <span *ngFor="let item of emoji_json_keys" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{emoji_lib[item].char}}</span>\n      <p id="no_emoji_msg"></p>\n    </section>\n\n    <!-- <ion-list [virtualScroll]="emoji_json_keys">\n\n        <ion-item *virtualItem="let item" id="ion-item">\n            {{emoji_lib[item].char}}\n        </ion-item>\n      \n      </ion-list>\n   -->\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\add-emoji\add-emoji.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AddEmojiPage);
    return AddEmojiPage;
}());

//# sourceMappingURL=add-emoji.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTextFacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTextFacesPage = /** @class */ (function () {
    function AddTextFacesPage(navCtrl, navParams, view, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.text_faces = ["( ͡° ͜ʖ ͡°)", "¯\\_(ツ)_/¯", "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)", "≧◡≦", "(▰˘◡˘▰)", "(▀̿Ĺ̯▀̿ ̿)", "(ง ͠° ͟ل͜ ͡°)ง", "༼ つ ◕_◕ ༽つ", "ಠ_ಠ", "(づ｡ ◕‿‿◕｡) づ ", "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]]", "(∩︵∩)"];
        this.sad_text_faces = ["(◡︿◡✿)", "(✖╭╮✖)", "(✖︿✖)", "(✖︵✖)", "(✖.✖)", "v( ‘.’ )v", "●︿●", "◄.►", "◄︿►", "(◕︵◕)", "≧︵≦", " ͡°︵°"];
        this.romance_text_faces = ["(• ε •)", "(♥ ε ♥)", "(◕ ε ◕)", "♥‿♥", "(ﾉ◕ヮ◕)ﾉ*:・ﾟ♥ ✧ﾟ♥:ﾟ* ♥ﾟ✧ﾟヽ(◕ヮ◕ヽ)"];
        this.cute_text_faces = ["~,~", "⊂◉‿◉つ", "●ᴥ●", "(◕‿◕✿)", "ʕ•ᴥ•ʔ", "(●´ω｀●)", , "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ ✧ﾟ・: *ヽ(◕ヮ◕ヽ)", "ʕʘ‿ʘʔ", "(✿◠‿◠)", "(✿◠‿◠) *:・ﾟ✧ ✧"];
        this.happy_text_faces = ["≖‿≖", "٩(^‿^)۶", "◕‿◕", "✖‿✖"];
        this.angry_text_faces = ["►.◄", "{(>_<)}", "ˇ︿ˇ", ">.<",
            "\u2554\u2566\u2566\u2566\u2557OMG\n\n  \u2560\u256C\u256C\u256C\u2563CHOCOLATE!!\n  \u2560\u256C\u256C\u256C\u2563Put this on your page\n  \u2560\u256C\u256C\u256C\u2563If you LOVE\n  \u255A\u2569\u2569\u2569\u255D\u2665 CHOCOLATE",];
        this.category = "happy_text_faces";
    }
    AddTextFacesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddTextFacesPage');
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__('.text_faces', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('success', function () { return _this.displayToast("success"); });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    AddTextFacesPage.prototype.addToFavourites = function (item) {
    };
    AddTextFacesPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddTextFacesPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying the text face. Try again.", "success": "Copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    AddTextFacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-text-faces',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\add-text-faces\add-text-faces.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Eastern Text Faces</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="category">\n      <ion-segment-button value="happy_text_faces">\n        Happy\n      </ion-segment-button>\n      <ion-segment-button value="sad_text_faces">\n        Sad\n      </ion-segment-button>\n      <ion-segment-button value="cute_text_faces">\n        Cute\n      </ion-segment-button>\n      <ion-segment-button value="romance_text_faces">\n        Romantic\n      </ion-segment-button>\n      <ion-segment-button value="angry_text_faces">\n        Angry\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="selectable" overflow-scroll="true">\n\n  <ion-toolbar>\n\n    <div [ngSwitch]="category">\n      <ion-list *ngSwitchCase="\'happy_text_faces\'">\n        <section>\n          <h1>:) Text Faces</h1>\n          <ion-card *ngFor="let item of text_faces" attr.id={{item}} class="text_faces" overflow-scroll="true">\n\n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n\n          </ion-card>\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'sad_text_faces\'">\n        <section>\n          <h1>Sad Text Faces</h1>\n          <ion-card *ngFor="let item of sad_text_faces" attr.id={{item}} class="text_faces" (click)="addToFavourites(item)">\n\n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n\n          </ion-card>\n\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'cute_text_faces\'">\n        <section>\n          <h1>Super Cuute Text Faces</h1>\n          <span>{{item}}</span>\n\n          <ion-card *ngFor="let item of cute_text_faces" attr.id={{item}} class="text_faces" (click)="addToFavourites(item)">\n\n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n\n          </ion-card>\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'romance_text_faces\'">\n        <section>\n            <h1>Romance Text Faces</h1>\n\n            <ion-card *ngFor="let item of romance_text_faces" attr.id={{item}} class="text_faces" (click)="addToFavourites(item)">\n          \n              <ion-card-content>\n                {{item}}\n              </ion-card-content>\n          \n            </ion-card>\n        </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'angry_text_faces\'">\n        <section>\n\n          <h1>Angry Text Faces</h1>\n          <ion-card *ngFor="let item of angry_text_faces" attr.id={{item}} class="text_faces" (click)="addToFavourites(item)">\n        \n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n        \n          </ion-card>\n        \n        </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'travel\'">\n        <section>\n          <p class="help_msg">Just click on an emoji to copy it.</p>\n\n          <span *ngFor="let item of travel_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n\n        </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'flags\'">\n        <section>\n          <p class="help_msg">Just click on an emoji to copy it.</p>\n\n          <span *ngFor="let item of flags_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n\n        </section>\n      </ion-list>\n\n    </div>\n  </ion-toolbar>\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\add-text-faces\add-text-faces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AddTextFacesPage);
    return AddTextFacesPage;
}());

//# sourceMappingURL=add-text-faces.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCatFacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cat_ascii_faces__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cat_ascii_faces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cat_ascii_faces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCatFacesPage = /** @class */ (function () {
    function AddCatFacesPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.cat_ascii_faces = __WEBPACK_IMPORTED_MODULE_2_cat_ascii_faces__["cats"]; // list of cat ascii faces
    }
    AddCatFacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCatFacesPage');
        console.log(this.cat_ascii_faces);
        this.initialiseClipboard();
    };
    AddCatFacesPage.prototype.initialiseClipboard = function () {
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__('.western_text_faces', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    AddCatFacesPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    AddCatFacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-cat-faces',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\add-cat-faces\add-cat-faces.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cute Cat Faces</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="selectable">\n\n  <section>\n\n      <ion-card *ngFor="let item of cat_ascii_faces" attr.id={{item}} class="ascii_faces" overflow-scroll="true">\n\n        <ion-card-content>\n          {{item}}\n        </ion-card-content>\n\n      </ion-card>\n    </section>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\add-cat-faces\add-cat-faces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], AddCatFacesPage);
    return AddCatFacesPage;
}());

//# sourceMappingURL=add-cat-faces.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emojilib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favourite_emoji = [];
        this.emoji_lib = __WEBPACK_IMPORTED_MODULE_2_emojilib___default.a.lib;
    }
    FavouritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritesPage');
        this.favourite_emoji = this.navParams.get('item');
        console.log(this.favourite_emoji);
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\favourites\favourites.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Favourites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>Emoji</h1>\n  <section id="emoji">\n      <p *ngFor="let item of favourite_emoji">{{emoji_lib[item].char}}</p>\n\n    </section>\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoolSymbolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoolSymbolsPage = /** @class */ (function () {
    function CoolSymbolsPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.cool_symbols = ["✓", "⚖", "☆", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⚝", "✡", "☫", "☬", "☸", "✵", "❂", "☘", "♡", "♥", "❤", "⚘", "❀", "❃", "❁", "✼", "☀", "♫", "♪", "☃", "❄", "❅", "❆", "☂", "❦", "✈", "♕", "♛", "♖", "♜", "☁", "☾", "⍀", "⍁", "⍂", "⍃", "⍄", "⍅", "⍆", "⍇", "⍈", "⍉", "⍊", "⍋", "⍌", "⍍", "⍎", "⍏", "⍐", "⍑", "⍒", "⍓", "⍔", "⍕", "⍖", "⍗", "⍙", "⍚", "⍛", "⍜", "⍝", "⍞", "⍟", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", "▉", "▊", "▋", "▌", "▍", "▎", "▏", "▐", "░", "▒", "▓", "▔", "▕", "▖", "▗", "▘", "▙", "▚", "▛", "▜", "▝", "▞", "▟"];
    }
    CoolSymbolsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoolSymbolsPage');
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__('.symbols', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    CoolSymbolsPage.prototype.addToFavourites = function (item) {
        var toast;
        // Display toast message
        toast = this.toastCtrl.create({
            message: 'Symbol copied & added to your favourites',
            duration: 1500,
            position: 'bottom'
        });
        toast.present();
    };
    CoolSymbolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cool-symbols',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\cool-symbols\cool-symbols.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cool Unicode Symbols</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="selectable">\n    <section class="single_symbols" (click)="addToFavourites(item)">\n      <span *ngFor="let item of cool_symbols" attr.id={{item}} class="symbols">{{item}}</span>\n    </section>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\cool-symbols\cool-symbols.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], CoolSymbolsPage);
    return CoolSymbolsPage;
}());

//# sourceMappingURL=cool-symbols.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetGifsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_HelperUtils__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GetGifsPage = /** @class */ (function () {
    function GetGifsPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.link_array = [];
        this.cute_link_array = [];
        this.weather_link_array = [];
        this.effects_link_array = [];
        this.giphy_api_key = __WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json__["api_key"];
        this.sticker_keywords = ["weather", "emoji", "magic", "tech"];
        this.sticker_array = [];
        this.reaction_link_array = [];
        this.todo = {};
        this.sticker_type = "emoji";
    }
    GetGifsPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    ;
    GetGifsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetGifsPage');
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js__('.copy_link', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.getEmojiStickers();
        this.getCuteStickers();
        this.getReactionStickers();
        this.getWeatherStickers();
        this.getEffectsStickers();
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    GetGifsPage.prototype.getEmojiStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=emoji&api_key=" + this.giphy_api_key + "&limit=90&rating=g").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            var link_count = 0;
            for (var k = 0; link_count < 40; k += 1) {
                var ranIndex = Object(__WEBPACK_IMPORTED_MODULE_7__modules_HelperUtils__["a" /* getRandomNumber */])(0, _this.posts.length - 1);
                var link = _this.posts[ranIndex].images.original.url;
                if (_this.link_array.indexOf(link) > -1) {
                    continue;
                }
                else {
                    _this.link_array.push(link);
                    link_count += 1;
                }
            }
        });
    };
    GetGifsPage.prototype.getCuteStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=cute&api_key=" + this.giphy_api_key + "&limit=40").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            for (var k = 0; k < _this.posts.length; k += 1) {
                var link = _this.posts[k].images.original.url;
                _this.cute_link_array.push(link);
            }
        });
    };
    GetGifsPage.prototype.getReactionStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/packs/2815?api_key=" + this.giphy_api_key).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            console.log(_this.posts);
            for (var k = 0; k < _this.posts.length; k += 1) {
                var link = _this.posts[k].images.original.url;
                _this.reaction_link_array.push(link);
            }
        });
    };
    GetGifsPage.prototype.getWeatherStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=weather&api_key=" + this.giphy_api_key + "&limit=40").map(function (res) { return res.json(); }).subscribe(function (data) {
            var out_data = data.data;
            for (var k = 0; k < out_data.length; k += 1) {
                var link = out_data[k].images.original.url;
                _this.weather_link_array.push(link);
            }
        });
    };
    GetGifsPage.prototype.getEffectsStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=effects&api_key=" + this.giphy_api_key + "&limit=40").map(function (res) { return res.json(); }).subscribe(function (data) {
            var out_data = data.data;
            for (var k = 0; k < out_data.length; k += 1) {
                var link = out_data[k].images.original.url;
                _this.effects_link_array.push(link);
            }
        });
    };
    GetGifsPage.prototype.addToFavourites = function (item) {
    };
    GetGifsPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    GetGifsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-get-gifs',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\get-gifs\get-gifs.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Stickers & GIFS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="selectable">\n\n  <p>Get all your animated emoji stickers here. You\'ll get a new mix of stickers every time.</p>\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="sticker_type">\n\n      <ion-segment-button value="emoji">\n\n        Emoji\n\n      </ion-segment-button>\n\n      <ion-segment-button value="cute">\n\n        Cute\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="effects">\n\n        Effects\n\n      </ion-segment-button>\n\n      <ion-segment-button value="weather">\n\n        Weather\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="sticker_type">\n\n    <ion-list *ngSwitchCase="\'emoji\'">\n\n\n\n      <ion-item>\n\n        <h1>Emoji</h1>\n\n\n\n        <p>Get all your animated stickers here. They\'re perfect for message reactions! Just copy the link below the sticker\n\n          you wish to send. 👀</p>\n\n\n\n        <img src="../../assets/imgs/giphy_dark_rectangle.PNG">\n\n\n\n\n\n      </ion-item>\n\n\n\n      <ion-card *ngFor="let item of link_array" class="sticker_container">\n\n        <img src={{item}}/>\n\n        <ion-card-content>\n\n\n\n          <ion-item>\n\n            <ion-item>\n\n              <a button class="copy_link" item-right>\n\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n            </ion-item>\n\n\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'cute\'">\n\n      <ion-item>\n\n        <h1>Cute</h1>\n\n        <p>From the kawaii to the super cute, these adorable stickers will have you blushing.</p>\n\n        <img src="../../assets/imgs/giphy_dark_rectangle.PNG">\n\n\n\n      </ion-item>\n\n\n\n      <ion-card *ngFor="let item of cute_link_array" class="sticker_container">\n\n        <img src={{item}}/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n\n\n          </ion-card-title>\n\n          <ion-item>\n\n            <ion-item>\n\n              <a button class="copy_link" item-right>\n\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n            </ion-item>\n\n\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'effects\'">\n\n      <ion-item>\n\n        <h1>Effects</h1>\n\n        <p>Add a touch of magic to your next convo.</p>\n\n        <img src="../../assets/imgs/giphy_dark_rectangle.PNG">\n\n\n\n      </ion-item>\n\n\n\n      <ion-card *ngFor="let item of effects_link_array" class="sticker_container">\n\n        <img src={{item}}/>\n\n        <ion-card-content>\n\n\n\n          <ion-item>\n\n            <ion-item>\n\n              <a button class="copy_link" item-right>\n\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n            </ion-item>\n\n\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'weather\'">\n\n      <ion-item>\n\n        <h1>Weather</h1>\n\n        <p>Raining? Sun shining? There\'s a sticker for that.</p>\n\n        <img src="../../../www/assets/imgs/giphy_dark_rectangle.PNG">\n\n\n\n      </ion-item>\n\n\n\n      <ion-card *ngFor="let item of weather_link_array" class="sticker_container">\n\n        <img src={{item}}/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n\n\n          </ion-card-title>\n\n          <ion-item>\n\n            <ion-item>\n\n              <a button class="copy_link" item-right>\n\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n            </ion-item>\n\n\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\get-gifs\get-gifs.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <form (ngSubmit)=\"logForm()\">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"todo.title\" name=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Description</ion-label>\n        <ion-textarea [(ngModel)]=\"todo.description\" name=\"description\"></ion-textarea>\n      </ion-item>\n      <button ion-button type=\"submit\" block>Add Todo</button>\n    </form>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], GetGifsPage);
    return GetGifsPage;
}());

//# sourceMappingURL=get-gifs.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionEmojiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emojilib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmotionEmojiPage = /** @class */ (function () {
    function EmotionEmojiPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.emotion_emoji_array = [];
        this.emoji_lib = __WEBPACK_IMPORTED_MODULE_2_emojilib___default.a.lib;
        this.favourites = [];
    }
    EmotionEmojiPage.prototype.ionViewDidLoad = function () {
        this.populateEmotionEmojiArray();
        this.initialiseClipboard();
    };
    EmotionEmojiPage.prototype.initialiseClipboard = function () {
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__('.emoji_c', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    EmotionEmojiPage.prototype.populateEmotionEmojiArray = function () {
        var emoji_dict_keys = Object.keys(this.emoji_lib);
        for (var k = 0; k < emoji_dict_keys.length; k += 1) {
            var emoji_1 = this.emoji_lib[emoji_dict_keys[k]];
            var em_category = emoji_1.category;
            if (em_category === "people") {
                this.emotion_emoji_array.push(emoji_1.char);
            }
        }
        console.log(this.emotion_emoji_array);
    };
    EmotionEmojiPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    EmotionEmojiPage.prototype.addToFavourites = function (item) {
        this.favourites.push(item);
        this.displayToast("success");
    };
    EmotionEmojiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emotion-emoji',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\emotion-emoji\emotion-emoji.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Emotion Emoji</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="selectable">\n  <section>\n    <p id="help_msg">Just click on an emoji to copy it.</p>\n\n    <span *ngFor="let item of emotion_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n\n  </section>\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\emotion-emoji\emotion-emoji.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], EmotionEmojiPage);
    return EmotionEmojiPage;
}());

//# sourceMappingURL=emotion-emoji.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalsNaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emojilib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnimalsNaturePage = /** @class */ (function () {
    function AnimalsNaturePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.ani_nature_emoji_array = [];
        this.emoji_lib = __WEBPACK_IMPORTED_MODULE_2_emojilib___default.a.lib;
        this.favourites = [];
    }
    AnimalsNaturePage.prototype.ionViewDidLoad = function () {
        this.populateNatureEmojiArray();
        this.initialiseClipboard();
    };
    AnimalsNaturePage.prototype.initialiseClipboard = function () {
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__('.emoji_c', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    AnimalsNaturePage.prototype.populateNatureEmojiArray = function () {
        var emoji_dict_keys = Object.keys(this.emoji_lib);
        for (var k = 0; k < emoji_dict_keys.length; k += 1) {
            var emoji_1 = this.emoji_lib[emoji_dict_keys[k]];
            var em_category = emoji_1.category;
            if (em_category === "animals_and_nature") {
                this.ani_nature_emoji_array.push(emoji_1.char);
            }
        }
        console.log(this.ani_nature_emoji_array);
    };
    AnimalsNaturePage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    AnimalsNaturePage.prototype.addToFavourites = function (item) {
        this.favourites.push(item);
        this.displayToast("success");
    };
    AnimalsNaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emotion-emoji',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\animals-nature\animals-nature.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Animals & Nature Emoji</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <section>\n        <p class="help_msg">Just click on an emoji to copy it.</p>\n    \n        <span *ngFor="let item of ani_nature_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n    \n      </section>\n</ion-content>\n'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\animals-nature\animals-nature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], AnimalsNaturePage);
    return AnimalsNaturePage;
}());

//# sourceMappingURL=animals-nature.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiTypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emojilib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emojilib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmojiTypesPage = /** @class */ (function () {
    function EmojiTypesPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.emoji_lib = __WEBPACK_IMPORTED_MODULE_2_emojilib___default.a.lib;
        this.emotion_emoji_array = [];
        this.ani_nature_emoji_array = [];
        this.activities_emoji_array = [];
        this.objects_emoji_array = [];
        this.symbols_emoji_array = [];
        this.travel_emoji_array = [];
        this.flags_emoji_array = [];
        this.favourites = [];
        this.emoji_type = "emotions";
    }
    EmojiTypesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmojiTypesPage');
        this.populateEmojiArray("people", this.emotion_emoji_array);
        this.populateEmojiArray("animals_and_nature", this.ani_nature_emoji_array);
        this.populateEmojiArray("activity", this.activities_emoji_array);
        this.populateEmojiArray("objects", this.objects_emoji_array);
        this.populateEmojiArray("symbols", this.symbols_emoji_array);
        this.populateEmojiArray("travel_and_places", this.travel_emoji_array);
        this.populateEmojiArray("flags", this.flags_emoji_array);
        this.initialiseClipboard();
    };
    EmojiTypesPage.prototype.populateEmojiArray = function (category, emoji_array) {
        var emoji_dict_keys = Object.keys(this.emoji_lib);
        for (var k = 0; k < emoji_dict_keys.length; k += 1) {
            var emoji_1 = this.emoji_lib[emoji_dict_keys[k]];
            var em_category = emoji_1.category;
            if (em_category === category) {
                emoji_array.push(emoji_1.char);
            }
        }
    };
    EmojiTypesPage.prototype.initialiseClipboard = function () {
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard_dist_clipboard_min_js__('.emoji_c', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    EmojiTypesPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    EmojiTypesPage.prototype.addToFavourites = function (item) {
        this.favourites.push(item);
        this.displayToast("success");
    };
    EmojiTypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emoji-types',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\emoji-types\emoji-types.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Copy & Paste Emoji</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="emoji_type">\n      <ion-segment-button value="emotions">\n        Emotions\n      </ion-segment-button>\n      <ion-segment-button value="ani_nature">\n        Animals & Nature\n      </ion-segment-button>\n      <ion-segment-button value="activities">\n        Activities\n      </ion-segment-button>\n      <ion-segment-button value="symbols">\n          Symbols\n        </ion-segment-button>\n      <ion-segment-button value="objects">\n        Objects\n      </ion-segment-button>\n      <ion-segment-button value="travel">\n          Travel\n        </ion-segment-button>\n        <ion-segment-button value="flags">\n            Flags\n          </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content padding class="selectable">\n\n  <ion-toolbar>\n\n    <div [ngSwitch]="emoji_type">\n      <ion-list *ngSwitchCase="\'emotions\'">\n        <section>\n          <p class="help_msg">Just click on an emoji to copy it.</p>\n\n          <span *ngFor="let item of emotion_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'ani_nature\'">\n        <section>\n          <p class="help_msg">Just click on an emoji to copy it.</p>\n\n          <span *ngFor="let item of ani_nature_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n\n        </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'activities\'">\n        <section>\n          <p class="help_msg">Just click on an emoji to copy it.</p>\n\n          <span *ngFor="let item of activities_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'objects\'">\n          <section>\n              <p class="help_msg">Just click on an emoji to copy it.</p>\n    \n              <span *ngFor="let item of objects_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n    \n            </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'symbols\'">\n          <section>\n              <p class="help_msg">Just click on an emoji to copy it.</p>\n    \n              <span *ngFor="let item of symbols_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n    \n            </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'travel\'">\n          <section>\n              <p class="help_msg">Just click on an emoji to copy it.</p>\n    \n              <span *ngFor="let item of travel_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n    \n            </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'flags\'">\n          <section>\n              <p class="help_msg">Just click on an emoji to copy it.</p>\n    \n              <span *ngFor="let item of flags_emoji_array" attr.id={{item}} class="emoji_c" (click)="addToFavourites(item)">{{item}}</span>\n    \n            </section>\n      </ion-list>\n\n    </div>\n  </ion-toolbar>\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\emoji-types\emoji-types.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], EmojiTypesPage);
    return EmojiTypesPage;
}());

//# sourceMappingURL=emoji-types.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WesternTextFacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WesternTextFacesPage = /** @class */ (function () {
    function WesternTextFacesPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.western_happy_text_faces = [":‑)", ":)", ":-]", ":]", ":-3", ":3", ":->", ":>", "8-)", "8)", ":-}", ":}", ":o)", ":c)", ":^)", "=]", "=)", ":‑D", ":D", "8‑D", "8D", "x‑D", "xD", "X‑D", "XD", "=D", "=3", "B^D", ":'‑)", ":')"];
        this.western_sad_text_faces = [":‑(", ":(", ":‑c", ":c", ":‑<", ":<", ":‑[", ":[", ":-||", ">:[", ":{", ":@", ">:(", ":'‑(", ":'("];
        this.western_angry_text_faces = [">.<", "v.v"];
        this.western_cute_text_faces = [":‑P", ":P", "X‑P", "XP", "x‑p", "xp", ":‑p", ":p", ":‑Þ", ":Þ", ":‑þ", ":þ", ":‑b", ":b", "d:", "=p", ">:P"];
        this.western_romance_text_faces = [":-*", ":*", ":×"];
        this.west_category = "western_happy_text_faces";
    }
    WesternTextFacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WesternTextFacesPage');
        this.initialiseClipboard();
    };
    WesternTextFacesPage.prototype.initialiseClipboard = function () {
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard_min_js__('.western_text_faces', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    WesternTextFacesPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    WesternTextFacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-western-text-faces',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\western-text-faces\western-text-faces.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Western Text Faces</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="west_category">\n      <ion-segment-button value="western_happy_text_faces">\n        Happy\n      </ion-segment-button>\n      <ion-segment-button value="western_sad_text_faces">\n        Sad\n      </ion-segment-button>\n      <ion-segment-button value="western_cute_text_faces">\n        Cute\n      </ion-segment-button>\n      <ion-segment-button value="western_romance_text_faces">\n        Romantic\n      </ion-segment-button>\n      <ion-segment-button value="western_angry_text_faces">\n        Angry\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-toolbar>\n\n    <div [ngSwitch]="west_category" class="selectable">\n      <ion-list *ngSwitchCase="\'western_happy_text_faces\'">\n        <section>\n          <h1>:) Text Faces</h1>\n          <ion-card *ngFor="let item of western_happy_text_faces" class="western_text_faces" attr.id={{item}} overflow-scroll="true">\n\n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n\n          </ion-card>\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'western_sad_text_faces\'">\n        <section>\n          <h1>Sad Text Faces</h1>\n          <ion-card *ngFor="let item of western_sad_text_faces" attr.id={{item}} class="western_text_faces" (click)="addToFavourites(item)">\n\n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n\n          </ion-card>\n\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'western_cute_text_faces\'">\n        <section>\n          <h1>Cute Text Faces</h1>\n          <span>{{item}}</span>\n\n          <ion-card *ngFor="let item of western_cute_text_faces" attr.id={{item}} class="western_text_faces" (click)="addToFavourites(item)">\n\n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n\n          </ion-card>\n        </section>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'western_romance_text_faces\'">\n        <section>\n            <h1>Romance Text Faces</h1>\n\n            <ion-card *ngFor="let item of western_romance_text_faces" attr.id={{item}} class="western_text_faces" (click)="addToFavourites(item)">\n          \n              <ion-card-content>\n                {{item}}\n              </ion-card-content>\n          \n            </ion-card>\n        </section>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'western_angry_text_faces\'">\n        <section>\n\n          <h1>Angry Text Faces</h1>\n          <ion-card *ngFor="let item of western_angry_text_faces" attr.id={{item}} class="western_text_faces" (click)="addToFavourites(item)">\n        \n            <ion-card-content>\n              {{item}}\n            </ion-card-content>\n        \n          </ion-card>\n        \n        </section>\n      </ion-list>\n\n\n    </div>\n  </ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\western-text-faces\western-text-faces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], WesternTextFacesPage);
    return WesternTextFacesPage;
}());

//# sourceMappingURL=western-text-faces.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmojifyPage = /** @class */ (function () {
    function EmojifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = {};
    }
    EmojifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmojifyPage');
    };
    EmojifyPage.prototype.getFieldText = function (event) {
        console.log("Input change");
        console.log(event);
    };
    EmojifyPage.prototype.onChange = function (data) {
        console.log("input change");
        console.log(this.text);
        console.log(data);
    };
    EmojifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emojify',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\emojify\emojify.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Emojify Text</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Add Text</ion-label>\n    \n    <ion-input type="text" [(ngModel)]="text.username" name="username" (ionInput)="getFieldText($event)"></ion-input>\n\n  </ion-item>\n\n  <ion-searchbar (ionInput)="getFieldText($event)"></ion-searchbar>\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\emojify\emojify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmojifyPage);
    return EmojifyPage;
}());

//# sourceMappingURL=emojify.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServeGifsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_HelperUtils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServeGifsPage = /** @class */ (function () {
    function ServeGifsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.link_array = [];
        this.giphy_api_key = __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__["api_key"];
        this.results = [];
        this.loadProgress = 0;
        this.gif_display_count = 20; // The number of GIFs that should be displayed.
        this.search_term = "";
        console.log('Looking for changes');
    }
    ServeGifsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServeGifsPage');
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js__('.symbols', {
            target: function (trigger) {
                return trigger;
            }
        });
    };
    ServeGifsPage.prototype.triggerSearch = function (event) {
        var _this = this;
        this.search_term = event.target.value;
        if (this.search_term != "" || this.search_term.trim() != "") {
            this.loadProgress = 10;
            var time = 600;
            var search_time = 500;
            var timeout = window.setTimeout(function () {
                _this.loadProgress += 10;
            }, time);
            var searchTimeout = window.setTimeout(function () {
                _this.searchGIFS(event);
            }, search_time);
        }
    };
    ServeGifsPage.prototype.searchGIFS = function (event) {
        var _this = this;
        console.log(event.target.value);
        var loading_msg = document.querySelector(".loading_msg");
        loading_msg.innerHTML = "Getting you GIFS";
        this.loadProgress = 30;
        this.http.get("https://api.giphy.com/v1/gifs/search?q=" + this.search_term + "&api_key=" + this.giphy_api_key + "&limit=40&rating=g").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loadProgress = 50;
            // re-initialise the link array back to its empty state.
            _this.link_array = [];
            //set the loading message to empty.
            loading_msg.innerHTML = "GIFs related to " + _this.search_term;
            var gif_results = data.data;
            if (gif_results.length === 0) {
                loading_msg.innerHTML = "No " + _this.search_term + " GIFS found :( Try again maybe?";
                _this.loadProgress = 0;
            }
            else {
                if (gif_results.length < _this.gif_display_count) {
                    _this.gif_display_count = gif_results.length;
                }
                var link_count = 0;
                for (var k = 0; link_count < 20; k += 1) {
                    var ranIndex = Object(__WEBPACK_IMPORTED_MODULE_4__modules_HelperUtils__["a" /* getRandomNumber */])(0, gif_results.length - 1);
                    var link = gif_results[ranIndex].images.original.url;
                    if (_this.link_array.indexOf(link) > -1) {
                        continue;
                    }
                    else {
                        _this.link_array.push(link);
                        link_count += 1;
                    }
                }
                console.log(_this.link_array);
                _this.loadProgress = 100;
            }
        });
    };
    ServeGifsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-serve-gifs',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\serve-gifs\serve-gifs.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Search GIFs</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="selectable">\n\n  <ion-searchbar (ionInput)="triggerSearch($event)" [(ngModel)]="myInput" debounce=1000></ion-searchbar>\n\n  <progress-bar [progress]="loadProgress"></progress-bar>\n\n  <p class="loading_msg">Search for GIFs ...</p>\n\n  <ion-card *ngFor="let item of link_array" class="gif_container">\n\n    <img src={{item}}/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n\n\n      </ion-card-title>\n\n      <ion-item>\n\n        <ion-item>\n\n          <a button class="copy_link" item-right>\n\n            <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n\n\n        </ion-item>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\serve-gifs\serve-gifs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ServeGifsPage);
    return ServeGifsPage;
}());

//# sourceMappingURL=serve-gifs.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_HelperUtils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchStickersPage = /** @class */ (function () {
    function SearchStickersPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.link_array = [];
        this.giphy_api_key = __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__["api_key"];
        this.results = [];
        this.loadProgress = 0;
        this.search_term = "";
        this.total_display_count = 40;
    }
    SearchStickersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchStickersPage');
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_5_clipboard_dist_clipboard_min_js__('.copy_link', {
            target: function (trigger) {
                return trigger;
            }
        });
    };
    SearchStickersPage.prototype.triggerSearch = function (event) {
        var _this = this;
        this.search_term = event.target.value;
        if (this.search_term != "" || this.search_term.trim() != "") {
            this.loadProgress = 10;
            var time = 600;
            var search_time = 500;
            var timeout = window.setTimeout(function () {
                _this.loadProgress += 10;
            }, time);
            var searchTimeout = window.setTimeout(function () {
                _this.searchGIFS(event);
            }, search_time);
        }
    };
    SearchStickersPage.prototype.searchGIFS = function (event) {
        var _this = this;
        console.log(event.target.value);
        var loading_msg = document.querySelector(".loading_msg");
        loading_msg.innerHTML = "Loading \"" + this.search_term + "\" stickers";
        this.loadProgress = 30;
        this.http.get("https://api.giphy.com/v1/stickers/search?q=" + this.search_term + "&api_key=" + this.giphy_api_key + "&limit=40&rating=g").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loadProgress = 50;
            // re-initialise the link array back to its empty state.
            _this.link_array = [];
            //set the loading message to empty.
            loading_msg.innerHTML = "";
            var gif_results = data.data;
            if (gif_results.length === 0) {
                loading_msg.innerHTML = "Found no stickers :(";
                _this.loadProgress = 0;
            }
            else {
                loading_msg.innerHTML = "Stickers related to " + _this.search_term;
                if (gif_results.length < _this.total_display_count) {
                    _this.total_display_count = gif_results.length;
                    _this.loadProgress = 0;
                }
                var link_count = 0;
                for (var k = 0; link_count < _this.total_display_count; k += 1) {
                    var ranIndex = Object(__WEBPACK_IMPORTED_MODULE_4__modules_HelperUtils__["a" /* getRandomNumber */])(0, gif_results.length - 1);
                    var link = gif_results[ranIndex].images.original.url;
                    if (_this.link_array.indexOf(link) > -1) {
                        continue;
                    }
                    else {
                        _this.link_array.push(link);
                        link_count += 1;
                    }
                }
                console.log(_this.link_array);
                _this.loadProgress = 100;
            }
        });
    };
    SearchStickersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-stickers',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\search-stickers\search-stickers.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Search for Stickers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="stickers" class="selectable">\n\n  <ion-searchbar (ionInput)="triggerSearch($event)" [(ngModel)]="myInput" debounce=1000></ion-searchbar>\n\n  <progress-bar [progress]="loadProgress"></progress-bar>\n\n  <p class="loading_msg">Search for GIPHY Stickers above</p>\n\n  <ion-card *ngFor="let item of link_array" class="gif_container">\n\n    <img src={{item}}/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n\n\n      </ion-card-title>\n\n      <ion-item>\n\n        <ion-item>\n\n          <ion-item>\n\n            <a button class="copy_link" item-right>\n\n              <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n\n\n          </ion-item>\n\n        </ion-item>\n\n\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\search-stickers\search-stickers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SearchStickersPage);
    return SearchStickersPage;
}());

//# sourceMappingURL=search-stickers.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingGifsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_HelperUtils__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_clipboard_dist_clipboard_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrendingGifsPage = /** @class */ (function () {
    function TrendingGifsPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.link_array = [];
        this.giphy_api_key = __WEBPACK_IMPORTED_MODULE_3__env_giphy_api_key_json__["api_key"];
    }
    TrendingGifsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrendingGifsPage');
        this.getTrendingGIFs();
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_6_clipboard_dist_clipboard_min_js__('.copy_link', {
            target: function (trigger) {
                return trigger;
            }
        });
    };
    TrendingGifsPage.prototype.getTrendingGIFs = function () {
        var _this = this;
        this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=" + this.giphy_api_key + "&limit=30&rating=g").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            var link_count = 0;
            for (var k = 0; link_count < 20; k += 1) {
                var ranIndex = Object(__WEBPACK_IMPORTED_MODULE_5__modules_HelperUtils__["a" /* getRandomNumber */])(0, _this.posts.length - 1);
                var link = _this.posts[ranIndex].images.original.url;
                if (_this.link_array.indexOf(link) > -1) {
                    continue;
                }
                else {
                    _this.link_array.push(link);
                    link_count += 1;
                }
            }
        });
    };
    TrendingGifsPage.prototype.addToFavourites = function (item) {
    };
    TrendingGifsPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "GIF copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    TrendingGifsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trending-gifs',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\trending-gifs\trending-gifs.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Trending GIFS</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="selectable">\n\n  <ion-item>\n\n    <h1>Trending GIFS</h1>\n\n    <p>All the latest GIFS that are hot on the web.</p>\n\n    <img src="../../../www/assets/imgs/giphy_dark_rectangle.PNG">\n\n  </ion-item>\n\n\n\n  <ion-card *ngFor="let item of link_array" class="gif_container">\n\n    <img src={{item}}/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n\n\n      </ion-card-title>\n\n      <ion-item>\n\n        <ion-item>\n\n          <a button class="copy_link" item-right>\n\n            <ion-icon name="copy"></ion-icon>{{item}}</a>\n\n\n\n        </ion-item>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\trending-gifs\trending-gifs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http___["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], TrendingGifsPage);
    return TrendingGifsPage;
}());

//# sourceMappingURL=trending-gifs.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_HelperUtils__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GetStickersPage = /** @class */ (function () {
    function GetStickersPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.link_array = [];
        this.cute_link_array = [];
        this.weather_link_array = [];
        this.effects_link_array = [];
        this.giphy_api_key = __WEBPACK_IMPORTED_MODULE_6__env_giphy_api_key_json__["api_key"];
        this.sticker_keywords = ["weather", "emoji", "magic", "tech"];
        this.sticker_array = [];
        this.reaction_link_array = [];
        this.todo = {};
        this.sticker_type = "emoji";
    }
    GetStickersPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    ;
    GetStickersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GetGifsPage');
        this.clipboard = new __WEBPACK_IMPORTED_MODULE_4_clipboard_dist_clipboard_min_js__('.copy_link', {
            target: function (trigger) {
                return trigger;
            }
        });
        this.getEmojiStickers();
        this.getCuteStickers();
        this.getReactionStickers();
        this.getWeatherStickers();
        this.getEffectsStickers();
        this.clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            this.displayToast("error");
        });
    };
    GetStickersPage.prototype.getEmojiStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=emoji&api_key=" + this.giphy_api_key + "&limit=90&rating=g").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            var link_count = 0;
            for (var k = 0; link_count < 40; k += 1) {
                var ranIndex = Object(__WEBPACK_IMPORTED_MODULE_7__modules_HelperUtils__["a" /* getRandomNumber */])(0, _this.posts.length - 1);
                var link = _this.posts[ranIndex].images.original.url;
                if (_this.link_array.indexOf(link) > -1) {
                    continue;
                }
                else {
                    _this.link_array.push(link);
                    link_count += 1;
                }
            }
        });
    };
    GetStickersPage.prototype.getCuteStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=cute&api_key=" + this.giphy_api_key + "&limit=40").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            for (var k = 0; k < _this.posts.length; k += 1) {
                var link = _this.posts[k].images.original.url;
                _this.cute_link_array.push(link);
            }
        });
    };
    GetStickersPage.prototype.getReactionStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/packs/2815?api_key=" + this.giphy_api_key).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            console.log(_this.posts);
            for (var k = 0; k < _this.posts.length; k += 1) {
                var link = _this.posts[k].images.original.url;
                _this.reaction_link_array.push(link);
            }
        });
    };
    GetStickersPage.prototype.getWeatherStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=weather&api_key=" + this.giphy_api_key + "&limit=40").map(function (res) { return res.json(); }).subscribe(function (data) {
            var out_data = data.data;
            for (var k = 0; k < out_data.length; k += 1) {
                var link = out_data[k].images.original.url;
                _this.weather_link_array.push(link);
            }
        });
    };
    GetStickersPage.prototype.getEffectsStickers = function () {
        var _this = this;
        this.http.get("http://api.giphy.com/v1/stickers/search?q=effects&api_key=" + this.giphy_api_key + "&limit=40").map(function (res) { return res.json(); }).subscribe(function (data) {
            var out_data = data.data;
            for (var k = 0; k < out_data.length; k += 1) {
                var link = out_data[k].images.original.url;
                _this.effects_link_array.push(link);
            }
        });
    };
    GetStickersPage.prototype.addToFavourites = function (item) {
    };
    GetStickersPage.prototype.displayToast = function (state) {
        var state_dict = { "error": "Error copying your emoji. Try again.", "success": "Emoji copied & added to your favourites" };
        var toast = this.toastCtrl.create({
            message: state_dict[state],
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    GetStickersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-get-stickers',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\get-stickers\get-stickers.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Stickers & GIFS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="selectable">\n  <p>Get all your animated emoji stickers here. You\'ll get a new mix of stickers every time.</p>\n  <div padding>\n    <ion-segment [(ngModel)]="sticker_type">\n      <ion-segment-button value="emoji">\n        Emoji\n      </ion-segment-button>\n      <ion-segment-button value="cute">\n        Cute\n      </ion-segment-button>\n\n      <ion-segment-button value="effects">\n        Effects\n      </ion-segment-button>\n      <ion-segment-button value="weather">\n        Weather\n      </ion-segment-button>\n\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="sticker_type">\n    <ion-list *ngSwitchCase="\'emoji\'">\n\n      <ion-item>\n        <h1>Emoji</h1>\n\n        <p>Get all your animated stickers here. They\'re perfect for message reactions! Just copy the link below the sticker\n          you wish to send. 👀</p>\n\n        <img src="../../assets/imgs/giphy_dark_rectangle.PNG">\n\n\n      </ion-item>\n\n      <ion-card *ngFor="let item of link_array" class="sticker_container">\n        <img src={{item}}/>\n        <ion-card-content>\n\n          <ion-item>\n            <ion-item>\n              <a button class="copy_link" item-right>\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n            </ion-item>\n\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'cute\'">\n      <ion-item>\n        <h1>Cute</h1>\n        <p>From the kawaii to the super cute, these adorable stickers will have you blushing.</p>\n        <img src="../../assets/imgs/giphy_dark_rectangle.PNG">\n\n      </ion-item>\n\n      <ion-card *ngFor="let item of cute_link_array" class="sticker_container">\n        <img src={{item}}/>\n        <ion-card-content>\n          <ion-card-title>\n\n          </ion-card-title>\n          <ion-item>\n            <ion-item>\n              <a button class="copy_link" item-right>\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n            </ion-item>\n\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'effects\'">\n      <ion-item>\n        <h1>Effects</h1>\n        <p>Add a touch of magic to your next convo.</p>\n        <img src="../../assets/imgs/giphy_dark_rectangle.PNG">\n\n      </ion-item>\n\n      <ion-card *ngFor="let item of effects_link_array" class="sticker_container">\n        <img src={{item}}/>\n        <ion-card-content>\n\n          <ion-item>\n            <ion-item>\n              <a button class="copy_link" item-right>\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n            </ion-item>\n\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'weather\'">\n      <ion-item>\n        <h1>Weather</h1>\n        <p>Raining? Sun shining? There\'s a sticker for that.</p>\n        <img src="../../../www/assets/imgs/giphy_dark_rectangle.PNG">\n\n      </ion-item>\n\n      <ion-card *ngFor="let item of weather_link_array" class="sticker_container">\n        <img src={{item}}/>\n        <ion-card-content>\n          <ion-card-title>\n\n          </ion-card-title>\n          <ion-item>\n            <ion-item>\n              <a button class="copy_link" item-right>\n                <ion-icon name="copy"></ion-icon>{{item}}</a>\n            </ion-item>\n\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\get-stickers\get-stickers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], GetStickersPage);
    return GetStickersPage;
}());

//# sourceMappingURL=get-stickers.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_progress_bar_progress_bar__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_emoji_add_emoji__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_text_faces_add_text_faces__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_cat_faces_add_cat_faces__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favourites_favourites__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cool_symbols_cool_symbols__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_get_gifs_get_gifs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_emotion_emoji_emotion_emoji__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_animals_nature_animals_nature__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_emoji_types_emoji_types__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_western_text_faces_western_text_faces__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_emojify_emojify__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_serve_gifs_serve_gifs__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_search_stickers_search_stickers__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_trending_gifs_trending_gifs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_trending_stickers_trending_stickers__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_get_stickers_get_stickers__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_emoji_add_emoji__["a" /* AddEmojiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_text_faces_add_text_faces__["a" /* AddTextFacesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_cat_faces_add_cat_faces__["a" /* AddCatFacesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cool_symbols_cool_symbols__["a" /* CoolSymbolsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_get_stickers_get_stickers__["a" /* GetStickersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_stickers_search_stickers__["a" /* SearchStickersPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trending_stickers_trending_stickers__["a" /* TrendingStickersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_western_text_faces_western_text_faces__["a" /* WesternTextFacesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_emotion_emoji_emotion_emoji__["a" /* EmotionEmojiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_animals_nature_animals_nature__["a" /* AnimalsNaturePage */],
                __WEBPACK_IMPORTED_MODULE_6__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_serve_gifs_serve_gifs__["a" /* ServeGifsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_emojify_emojify__["a" /* EmojifyPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_emoji_types_emoji_types__["a" /* EmojiTypesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_get_gifs_get_gifs__["a" /* GetGifsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_trending_gifs_trending_gifs__["a" /* TrendingGifsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_emoji_add_emoji__["a" /* AddEmojiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_text_faces_add_text_faces__["a" /* AddTextFacesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_cat_faces_add_cat_faces__["a" /* AddCatFacesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_emotion_emoji_emotion_emoji__["a" /* EmotionEmojiPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_emojify_emojify__["a" /* EmojifyPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_serve_gifs_serve_gifs__["a" /* ServeGifsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_search_stickers_search_stickers__["a" /* SearchStickersPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trending_stickers_trending_stickers__["a" /* TrendingStickersPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_get_stickers_get_stickers__["a" /* GetStickersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_western_text_faces_western_text_faces__["a" /* WesternTextFacesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cool_symbols_cool_symbols__["a" /* CoolSymbolsPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_get_gifs_get_gifs__["a" /* GetGifsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_animals_nature_animals_nature__["a" /* AnimalsNaturePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_emoji_types_emoji_types__["a" /* EmojiTypesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_trending_gifs_trending_gifs__["a" /* TrendingGifsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\components\progress-bar\progress-bar.html"*/'<div class="outer-loading">\n\n  <div class="inner-loading" [style.width]="progress + \'%\'">\n\n      {{progress}}%\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingStickersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrendingStickersPage = /** @class */ (function () {
    function TrendingStickersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrendingStickersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrendingStickersPage');
    };
    TrendingStickersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trending-stickers',template:/*ion-inline-start:"C:\Users\silvi\Desktop\copypastr\src\pages\trending-stickers\trending-stickers.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Trending Stickers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="selectable">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silvi\Desktop\copypastr\src\pages\trending-stickers\trending-stickers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TrendingStickersPage);
    return TrendingStickersPage;
}());

//# sourceMappingURL=trending-stickers.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomNumber;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//# sourceMappingURL=HelperUtils.js.map

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = {"api_key":"Ysqww9WUVspxr7yWrbytNNbmsCOnkNOQ"}

/***/ })

},[231]);
//# sourceMappingURL=main.js.map