import {Page, NavController} from 'ionic-angular';
import {App, Platform, Storage, SqlStorage} from 'ionic-angular';
import {FavteamPage} from '../../pages/favteam/favteam';
import {AvatarpagePage} from '../../pages/avatarpage/avatarpage';
import {TourpagePage} from '../../pages/tourpage/tourpage';
import {NicknamepagePage} from '../../pages/nicknamepage/nicknamepage';


/*
  Generated class for the ProfilepagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/profilepage/profilepage.html',
})
export class ProfilepagePage {
  private pages;
  private storage;
  constructor(public nav: NavController, public platform:Platform) {
    this.nav = nav;
    this.initializeApp();
    
    this.pages = [{'fav':FavteamPage}];
  }
  
  openPage(page){
    switch (page){
      case 'fav':
      this.nav.setRoot(FavteamPage);
      break;
      
      case 'avatar':
      this.nav.setRoot(AvatarpagePage);
      break;
      
      case 'nick':
      this.nav.setRoot(NicknamepagePage);
      break;
      
      case 'tour':
      this.nav.setRoot(TourpagePage);
    }    
  }
  
  initializeApp(){
    this.platform.ready().then(() => {
      this.storage = new Storage(SqlStorage);
      this.storage.query('CREATE TABLE IF NOT EXISTS profile(avatar TEXT, favteam TEXT, nickname TEXT)').then((data) => {
          console.log('table created');
      }, (error) => {
        console.log('error');
      });      
    });
  }
}
