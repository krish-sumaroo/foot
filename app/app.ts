import {ViewChild} from '@angular/core';
import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {LeaderboardPage} from './pages/leaderboard/leaderboard';
import {RegisterPage} from './pages/register/register';
import {ActionsPage} from './pages/actions/actions';
import {FavteamPage} from './pages/favteam/favteam';




@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = FavteamPage;
  pages:Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();
    this.pages = [
      {title : 'Chat', component: LoginPage},
      {title : 'Leaderboard', component: LeaderboardPage},
      {title : 'Register', component: RegisterPage},
      {title : 'Actions', component : ActionsPage}
    ];
    
   
  }
  
  initializeApp() {
     this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
