import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User } from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
import { MainPage} from '../main/main';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user={}  as User;
  constructor(private audthi:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
async login(user:User){
  try{
const result=this.audthi.auth.signInWithEmailAndPassword(user.email,user.password)
if(result)
this.navCtrl.setRoot(MainPage)
}
catch(e){
  console.log(e);
}
}
register(){
  this.navCtrl.push('RegisterPage')
}
google(){
  this.audthi.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
 .then(res =>{
this.navCtrl.setRoot(MainPage)
   console.log(res)
 })
}
}
