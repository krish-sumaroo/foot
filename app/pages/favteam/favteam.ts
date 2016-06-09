import {Page, NavController} from 'ionic-angular';
import {App, Platform, Storage, SqlStorage} from 'ionic-angular';

/*
  Generated class for the FavteamPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/favteam/favteam.html',
})
export class FavteamPage {
 public saturation = 0;  
 public teams = {'groupA' : [{'name':'alb'},{'name':'fra'},{'name':'rom'},{'name':'swi'}],
                  'groupB' : [{'name':'eng'},{'name':'rus'},{'name':'slo'},{'name':'wal'}]
            };
          
 public groupA = this.teams.groupA;
 public groupB = this.teams.groupB;
 private storage = new Storage(SqlStorage);
            
  constructor(public nav: NavController) {}
  
  pickFavteam(team){
   this.storage.query("INSERT INTO profile (favteam) VALUES ('"+ team +"')"); 
    console.log(team);
  }
}
