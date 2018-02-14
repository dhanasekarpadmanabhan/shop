import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User } from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
user={} as User;
  constructor(private audthi:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

register(user:User) {
  try{
const result=this.audthi.auth.createUserWithEmailAndPassword(user.email,user.password)
console.log(result)
}
catch(e){
  console.log(e)
}
    }

}
