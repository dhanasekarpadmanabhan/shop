import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Item } from '../../models/item/item.model';
import {ToastService} from '../../services/toast/toast.service';
import {ShoppigListService } from '../../services/shopping-list/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  item:Item={
    name:'',
    quantity:undefined,
    price:undefined
  }
  constructor(private toast:ToastService,public navCtrl: NavController, public navParams: NavParams,private shopping:ShoppigListService ) {
  }

  addItem1(item:Item){

      this.shopping.addItem1(item).then(ref=>{
        this.toast.show(""+item.name+" added successfully")
        this.navCtrl.pop()
    });
  }

}
