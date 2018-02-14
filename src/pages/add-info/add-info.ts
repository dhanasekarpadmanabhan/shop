import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {Info } from '../../models/info/info';
import {ShoppigListService } from '../../services/shopping-list/shopping-list.service';

import {ToastService} from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-add-info',
  templateUrl: 'add-info.html',
})
export class AddInfoPage {

    info:Info={
      name:'',
      info1:'',
      info2:'',
      info3:'',
      info4:'',
      info5:''
    }
    constructor(private toast:ToastService,public navCtrl: NavController, public navParams: NavParams,private shopping:ShoppigListService ) {
    }
    addItem(info:Info){

        this.shopping.addItem2(info).then(ref=>{
          this.toast.show(""+info.name+" added successfully")
          this.navCtrl.pop()
      });
    }

}
