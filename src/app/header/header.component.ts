import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/UserService';
import {UserRole} from '../models/UserRole';
import {ShoppingcartService} from '../services/ShoppingcartService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  amountItems = 0;

  constructor(
    private service: UserService,
    private shoppingcartService: ShoppingcartService
  ) { }

  isLoggedIn() {
    return this.service.isLoggedIn();
  }

  ngOnInit() {
    this.shoppingcartService.init();
    this.setAmountItems();
    this.shoppingcartService.listAltered.subscribe(result => {
      this.setAmountItems()
    });
    let self = this;
    if(this.service.isLoggedIn()) {
      this.service.setUserInfo(function() {
        if(self.service.user.userRole == UserRole.ADMIN) {
          self.isAdmin = true;
        }
      });
    }
  }

  setAmountItems() {
    this.amountItems = this.shoppingcartService.shoppinglist.length;;
  }

  destroySession() {
    this.service.destroySession();
  }
}
