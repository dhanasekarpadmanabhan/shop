import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Info} from '../../models/info/info';
import {ToastService} from '../../services/toast/toast.service';

import {ShoppigListService} from '../../services/shopping-list/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-info',
  templateUrl: 'edit-info.html',
})
export class EditInfoPage {
info:Info;
  constructor(private toast:ToastService,private shopping:ShoppigListService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log(this.navParams.get('info'))
 this.info=this.navParams.get('info')
  }
saveItem(info:Info){
this.shopping.editItem2(info)
.then(()=>{
  this.toast.show(""+info.name+" saved successfully")
  this.navCtrl.pop()
}  )
}
delete(info:Info){
  this.shopping.removeItem2(info)
  .then(()=>{
    this.toast.show(""+info.name+" deleted successfully")
    this.navCtrl.pop()
  } )
}


}
