import {Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Item } from './../../models/item/item.model';
import {Info } from './../../models/info/info';
@Injectable()
export class ShoppigListService {
  private shoppingListRef=this.db.list<Item>("shopping-item");
    private shoppingListRef1=this.db.list<Item>("shopping-buy");
    private shoppingListRef2=this.db.list<Info>("shopping-thing");
  constructor(private db:AngularFireDatabase){

  }

  getShoppingList(){
    return this.shoppingListRef;
  }
  getShoppingList1(){
    return this.shoppingListRef1;
  }
  getShoppingList2(){
    return this.shoppingListRef2;
  }

  addItem(item:Item){
    return this.shoppingListRef.push(item);
  }
  addItem1(item:Item){
      return this.shoppingListRef1.push(item);
  }
  addItem2(info:Info){
      return this.shoppingListRef2.push(info);
  }

  editItem(item:Item){
    return this.shoppingListRef.update(item.key,item);
  }
  editItem1(item:Item){
    return this.shoppingListRef1.update(item.key,item);
  }
  editItem2(info:Info){
    return this.shoppingListRef2.update(info.key,info);
  }

  removeItem(item:Item){
    return this.shoppingListRef.remove(item.key);
  }
  removeItem1(item:Item){
      return this.shoppingListRef1.remove(item.key);
  }
  removeItem2(info:Info){
      return this.shoppingListRef2.remove(info.key);
  }

}
