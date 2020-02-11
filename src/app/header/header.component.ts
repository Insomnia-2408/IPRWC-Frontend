import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/UserService';
import {UserRole} from '../models/UserRole';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;

  constructor(private service: UserService) { }

  isLoggedIn() {
    return this.service.isLoggedIn();
  }

  ngOnInit() {
    let self = this;
    if(this.service.isLoggedIn()) {
      this.service.setUserInfo(function() {
        if(self.service.user.userRole == UserRole.ADMIN) {
          self.isAdmin = true;
        }
      });
    }
  }

  destroySession() {
    this.service.destroySession();
  }
}
