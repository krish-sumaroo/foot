import {Page} from 'ionic-angular';
import {LeadermainPage} from '../leadermain/leadermain';
import {LeaderfriendPage} from '../leaderfriend/leaderfriend';
import {LeaderlocationPage} from '../leaderlocation/leaderlocation';

/*
  Generated class for the LeaderboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/leaderboard/leaderboard.html'
})
export class LeaderboardPage {
  
  tab1Root = LeadermainPage;
  tab2Root = LeaderfriendPage;
  tab3Root = LeaderlocationPage;
  constructor() {}
}
