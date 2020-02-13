import { Component, OnInit } from '@angular/core';
import {ShoppingcartService} from '../services/ShoppingcartService';
import {Product} from '../models/Product';
import {UserService} from '../services/UserService';
import {PopupService} from '../services/PopupService';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  shoppingList = [];
  total = 0;

  constructor(
    private shoppingcartService: ShoppingcartService,
    private userService: UserService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
    this.shoppingcartService.init();
    if(this.shoppingcartService.shoppinglist != null) {
      this.getShoppingList();
    }

    this.shoppingcartService.listAltered.subscribe( result => {
      this.getShoppingList();
    });
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

  order() {
    if(this.userService.isLoggedIn()) {
      this.shoppingcartService.emptyList();
      this.popupService.succesPopup("Order was placed!");
    } else {
      this.popupService.dangerPopup("You need to be logged in to place an order, log in or create an account.");
    }
  }
}
