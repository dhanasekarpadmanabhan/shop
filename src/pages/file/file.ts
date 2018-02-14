import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage} from '../login/login';


@IonicPage()
@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }


  logout(){
    this.navCtrl.setRoot(LoginPage)
  }
}
