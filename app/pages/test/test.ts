import {Page, NavController} from 'ionic-angular';
import {Component} from '@angular/core';

/*
  Generated class for the TestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/test/test.html',
})
export class TestPage {
  public brightness: number = 20;
  constructor(public nav: NavController) {}
}
