import {Page, NavController, Toast} from 'ionic-angular';

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
  private scoreObjSave = false;
  private scoreObjVars = {'units':0};

  //public imgUrl = '../../../img/'; for reference
  public imgUrl = 'img/';
  public scoreDataObj = {"team1":{"name":"eng","starters":[{"lname":"harry"},{"lname":"marcus"},{"lname":"wayne"}]},"team2":{"name":"fra","starters":[{"lname":"griezman"},{"lname":"giroud"},{"lname":"gignac"}]}};
  public scoreDataPoints = [5000,3000,2000,1000];
  public players1 = this.scoreDataObj.team1.starters;
  public players2 = this.scoreDataObj.team2.starters;
  public flag1 = this.imgUrl+this.scoreDataObj.team1.name+'.png';
  public flag2 = this.imgUrl+this.scoreDataObj.team2.name+'.png';
  public units = 2;
  public actionPoints = 0;
  
  /** scorer logic */
  public scorerUnits = 0;
  public scoreDataPointsRealTime;
  public scorerPoints = this.scoreDataPoints[0];
  private tempUnits = 0;
  private scorerSaveObj = {'status':false, 'obj':{'actionId':3,'actionActor':'','units':0}};

  
  
  //private scorerUnits = 0; 

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
  
  addScorer(event, item){
    event.stopPropagation();
    if(this.units > 0)
    {
      this.tempUnits++;
      this.scorerUnits++;
      console.log(this.scorerUnits);
      this.scoreDataPointsRealTime = this.scorerUnits * this.scoreDataPoints[0];
      this.units = this.units - 1;
      if(this.scorerSaveObj.status)
      {
        this.scorerSaveObj.obj.actionActor = item.lname;
        this.scorerSaveObj.obj.units = this.tempUnits;
      }
      else
      {
        this.scorerSaveObj.obj = {'actionId':3,'actionActor':item.lname,'units':this.tempUnits};
        this.scorerSaveObj.status = true;
      }
      
    }
    else{
      this.showToast('no more units Bub!');
    }
  }
  
  removeScorer(event, item){
    if(this.scorerUnits > 0 && this.units != 0)
    {
      this.tempUnits--;
      this.scorerUnits--;
      this.scoreDataPointsRealTime = this.scorerUnits * this.scoreDataPoints[0];
      this.units = this.units + 1;
      this.scorerSaveObj.obj = {'actionId':3,'actionActor':item.lname,'units':this.tempUnits};
    }
  }
  
  resetScorer(event){
    console.log('reset');
    this.units = this.units + this.tempUnits;
    this.tempUnits = 0;
    this.scorerSaveObj.status = false;
    this.scoreDataPointsRealTime = 0;
    this.scorerUnits = 0;
  }
  
  add(module){

    switch(module){
      case 'score':
      console.log('what');
      break;
    }  
  }

  showToast(msg){
    let toast = Toast.create({
    message: msg,
    duration: 3000
  });

    toast.onDismiss(() => {
      //console.log('Dismissed toast');
    });

    this.nav.present(toast);
  }

}
