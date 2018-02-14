import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {InfoPage } from '../info/info';
import {FilePage} from '../file/file';
import {BuyPage} from '../buy/buy';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
var1:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

info1(var1){

  this.navCtrl.push(HomePage,{param1:var1})
}
info2(var1){

  this.navCtrl.push(BuyPage,{param1:var1})
}
info3(var1){
console.log("hit")
this.navCtrl.push(InfoPage,{param1:var1})
}
info4(var1){

  this.navCtrl.push(FilePage,{param1:var1})
}
logout(){
  this.navCtrl.setRoot(LoginPage)
}
}
