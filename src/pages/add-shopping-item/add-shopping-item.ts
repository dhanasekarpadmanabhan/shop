import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {Item } from '../../models/item/item.model';
import {ShoppigListService } from '../../services/shopping-list/shopping-list.service';

import {ToastService} from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item:Item={
    name:'',
    quantity:undefined,
    price:undefined
  }
  constructor(private toast:ToastService,public navCtrl: NavController, public navParams: NavParams,private shopping:ShoppigListService ) {
  }
  addItem(item:Item){

      this.shopping.addItem(item).then(ref=>{
        this.toast.show(""+item.name+" added successfully")
        this.navCtrl.pop()
    });
  }

}
