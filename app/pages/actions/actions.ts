import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the ActionsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/actions/actions.html',
})
export class ActionsPage {
  public score;
  public imgUrl = '../../../img/';
  private scoreObjSave = false;
  private scoreObjVars = {'units':0};
  constructor(public nav: NavController) {
    this.scoreObj();
    
  }
  
  test(value){
    console.log(value);
  }
  
  scoreObj(){
    var initialObj = this.dataObj();
    
    //set initial values
    //this.points = initialObj.points[0];
    //this.team1 = this.imgUrl+initialObj.team1.name+'.png';
    //this.score = {'points':'650', 'team1':'../../../img/eng.png','team2':'fra'};
  }
  
  dataObj(){
    var jsonObj = {'points':[5000,3000,1500,500],
                  'team1': {'name':'eng'},
                  'team2': {'name':'fra'}
                }
    return jsonObj;            
  }
  
  add(module){

    switch(module){
      case 'score':
      console.log('what');
      break;
    }  
  }
  
  
}
