import {Page, NavController, Toast,Loading} from 'ionic-angular';

/*
  Generated class for the ActionsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/actions/actions.html',
})
export class ActionsPage {
  private loading;
  public score;
  private scoreObjSave = false;
  private scoreObjVars = {'units':0};
  private actionTempObj = 0 ;
  private tempUnits = 0;

  //public imgUrl = '../../../img/'; for reference
  public imgUrl = 'img/';
  public scoreDataObj = {"team1":{"name":"eng","starters":[{"lname":"harry"},{"lname":"marcus"},{"lname":"wayne"}]},"team2":{"name":"fra","starters":[{"lname":"griezman"},{"lname":"giroud"},{"lname":"gignac"}]}};
  public scoreDataPoints = [5000,3000,2000,1000];
  public players1 = this.scoreDataObj.team1.starters;
  public players2 = this.scoreDataObj.team2.starters;
  public flag1 = this.imgUrl+this.scoreDataObj.team1.name+'.png';
  public flag2 = this.imgUrl+this.scoreDataObj.team2.name+'.png';
  public units = 5;
  public actionPoints = 0;
  public team1score = 0;
  public team2score = 0;
  
  public homewin; 
  
  /** scorer logic */
  public scorerUnits = 0;
  public scoreDataPointsRealTime;
  public scorerPoints = 500;
  private scorerPointsNow;  
  private scorerSaveObj = {'status':false, 'obj':{'actionId':3,'actionActor':'','units':0}};
  
  /** score logic */
  private scoreSaveObj = {'t1':0,'t2':0};
  private scorePointsObj = [2000,1000,500];
  public scorepoints;
  private scorePointsNow;
  public scoreUnits = 1;
  
  /** win logic */
  public winpoints = 500;
  public winUnits = 1;
  private winBetUnits = 1;
  private winPointsNow;

  
  public scores = [0,1,2,3,4];
  //private scorerUnits = 0; 
  

  constructor(public nav: NavController) {
    //this.scoreObj();   
    
    this.scorePointsNow = this.scorePointsObj[0];
    this.scorepoints = this.scorePointsNow;
    this.winPointsNow = this.winpoints;
    this.scorerPointsNow = this.scorerPoints;
    //this.saveAndShowLoading();
  }
  
  
  /**** Win logic */
  addWin(){
    this.winUnits++;
    this.winpoints = this.winUnits * this.winPointsNow;
  }
  
  delWin(){
    if(this.winUnits > 1){
      this.winUnits--;
      this.winpoints = this.winUnits * this.winPointsNow;
    }
  }
  
  winCap(a){
    
  }
  
  
  /**** Score logic */
  scoreAction(team, score)
  {
    if(team == 't1')
    {
      this.scoreSaveObj.t1 = score;
    }
    else
    {
      this.scoreSaveObj = score;
    }
  }
  
  addScore(){   
      this.scoreUnits++;
      this.scorepoints = this.scoreUnits * this.scorePointsNow;
  }
  
  delScore(){
    if(this.scoreUnits > 1){
      this.scoreUnits--;
      this.scorepoints = this.scoreUnits * this.scorePointsNow;
    }
  }
  
  
  test(value){
    console.log(value);
  }
  
  winAction(e){
    if(e==3)
    {    this.homewin = false;}
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
    //gonna have to create object for each player element
    event.stopPropagation();
    if(this.scorerUnits > 0)
    {
      this.scorerUnits++;
      this.scorerPointsNow = this.scorerUnits * this.scorerPointsNow;
      this.units = this.units - 1;
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
  
  saveScorer(e,player){
    console.log(player);
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
  
  //** utils function **/
  checkPoints(){
    if(this.units > 0)
    {
      return true;
    }
    else
    {
      this.showToast('no more units!');
      return false;
    }
  }
  
  
  resetTempUnits(action){
    if (action == this.actionTempObj){
      return true;
    }
    else
    {
      this.units = this.units + this.tempUnits;
      this.tempUnits = 0;
      return false;
    }
  }
  checkActionUnits(action){
    if (action == this.actionTempObj){
      return true;
    }
    else
    {
      return false;
    }
  }
  
  saveAndShowLoading() {
  this.loading = Loading.create({
    content: 'Saving...'
  });
  
  this.nav.present(this.loading);
  }
  
  afterSave(){
    this.loading.dismiss();
  }

}
