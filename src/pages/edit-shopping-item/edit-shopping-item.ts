import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from '../../models/item/item.model';
import {ShoppigListService} from '../../services/shopping-list/shopping-list.service';

import {ToastService} from '../../services/toast/toast.service';
/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
item:Item;
  constructor(private toast:ToastService,private shopping:ShoppigListService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log(this.navParams.get('item'))
 this.item=this.navParams.get('item')
  }
saveItem(item:Item){
this.shopping.editItem(item)
.then(()=>{
  this.toast.show(""+item.name+" saved successfully")
  this.navCtrl.pop()
}  )
}
delete(item:Item){
  this.shopping.removeItem(item)
  .then(()=>{
    this.toast.show(""+item.name+" deleted successfully")
    this.navCtrl.pop()
  } )
}
}
