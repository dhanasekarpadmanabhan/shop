import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {ShoppigListService } from '../../services/shopping-list/shopping-list.service';
import {Observable} from 'rxjs/Observable';
import {Info } from '../../models/info/info'
import {AngularFireAuth} from 'angularfire2/auth';
import {LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
   title:string;
shoppingList$:Observable<Info[]>;
  constructor(private toast:ToastController,private afAuth:AngularFireAuth,public navCtrl: NavController,private shopping:ShoppigListService,public navParams: NavParams ) {
this.title=this.navParams.get('param1')
console.log(this.title)
    this.shoppingList$=this.shopping
    .getShoppingList2()  //DB list
    .snapshotChanges()   // Key and value
    .map(
      changes=>{
        return changes.map(c=>({
          key:c.payload.key ,
          ...c.payload.val(),
        }));
      });
  }

ionViewWillLoad(){
  this.afAuth.authState.subscribe(data=>{
    if(data.email &&data.uid){
    this.toast.create({
      message:"welcome to APP_NAME ,"+data.email,
      duration:3000
    }).present()
  }
  else{
    this.toast.create({
      message:"Could not found the authentication details try again",
      duration:3000
    }).present();

  }
})
}

logout(){
  this.navCtrl.setRoot(LoginPage);
}

}
