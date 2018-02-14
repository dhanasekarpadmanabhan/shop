  import {Injectable } from '@angular/core';
  import {AngularFireDatabase} from 'angularfire2/database';
  import {Info } from './../../models/info/info';
  @Injectable()
  export class Information {
    private shoppingListRef3=this.db.list<Info>("shopping-thing");

    constructor(private db:AngularFireDatabase){

    }

    getShoppingList(){
      return this.shoppingListRef3;
    }

    addItem(info:Info){
      return this.shoppingListRef3.push(info);
    }

    editItem(info:Info){
      return this.shoppingListRef3.update(info.key,info);
    }

    removeItem(info:Info){
      return this.shoppingListRef3.remove(info.key);
    }
  }
