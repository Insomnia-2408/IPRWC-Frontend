import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from '../services/ShoppingcartService';
import {Product} from '../models/Product';
import {audit} from 'rxjs/operators';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  shoppingList;
  total = 0;

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {
    this.shoppingcartService.init();
    if(this.shoppingcartService.shoppinglist != null) {
      this.getShoppingList();
    }
  }

  getShoppingList() {
    this.shoppingList = this.shoppingcartService.shoppinglist.slice();
    if(this.shoppingList.length == 0) {
      this.shoppingList = undefined;
    } else {
      this.total = 0;
      this.makeTotal();
    }
  }

  makeTotal() {
    for(let product of this.shoppingList) {
      this.total += product.price * product.amount;
    }
  }

  setAmount(item: Product, event: any) {
    this.shoppingcartService.setAmount(item, event.target.value);
    this.getShoppingList();
  }

  remove(item: Product) {
    this.shoppingcartService.removeItem(item);
    this.getShoppingList();
  }
}
