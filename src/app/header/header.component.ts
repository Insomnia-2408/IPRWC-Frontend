import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/UserService';
import {ShoppingcartService} from '../services/ShoppingcartService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  amountItems = 0;
  isCollapsed: boolean = true;

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
  }

  setAmountItems() {
    this.amountItems = this.shoppingcartService.shoppinglist.length;
  }

  destroySession() {
    this.service.destroySession();
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
