import {EventEmitter, Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Product} from '../models/Product';

@Injectable({providedIn: 'root'})
export class ShoppingcartService {
  shoppinglist = [];
  listAltered = new EventEmitter();

  constructor(private cookieService: CookieService) { }

  init() {
    this.shoppinglist = JSON.parse(localStorage.getItem('shoppinglist'));
  }

  addItem(product: Product) {
    this.shoppinglist.push(product);
    localStorage.setItem('shoppinglist', JSON.stringify(this.shoppinglist));
    this.listAltered.emit();
  }

  setAmount(item: Product, amount: number) {
    for(let product of this.shoppinglist) {
      if (item.id == product.id && item.productType == product.productType) {
        product.amount = amount;
      }
    }
    localStorage.setItem('shoppinglist', JSON.stringify(this.shoppinglist));
    this.listAltered.emit();
  }

  removeItem(item: Product) {
    for(let i=0; i<this.shoppinglist.length; i++ ) {
      if(item.id == this.shoppinglist[i].id && item.productType == this.shoppinglist[i].productType) {
        this.shoppinglist.splice(i, 1);
      }
    }
    localStorage.setItem('shoppinglist', JSON.stringify(this.shoppinglist));
    this.listAltered.emit();
  }

}
