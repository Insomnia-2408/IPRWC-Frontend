import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: UserService) { }

  isLoggedIn() {
    return this.service.isLoggedIn();
  }

  ngOnInit() {
  }

  destroySession() {
    this.service.destroySession();
  }
}
