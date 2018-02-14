import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from '../../models/item/item.model';
import {ToastService} from '../../services/toast/toast.service';

import {ShoppigListService} from '../../services/shopping-list/shopping-list.service';
@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
item:Item;
  constructor(private toast:ToastService,private shopping:ShoppigListService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log(this.navParams.get('item'))
 this.item=this.navParams.get('item')
  }
saveItem(item:Item){
this.shopping.editItem1(item)
.then(()=>{
  this.toast.show(""+item.name+" saved successfully")
  this.navCtrl.pop()
}  )
}
delete(item:Item){
  this.shopping.removeItem1(item)
  .then(()=>{
    this.toast.show(""+item.name+" deleted successfully")
    this.navCtrl.pop()
  } )
}

}
