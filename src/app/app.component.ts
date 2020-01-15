import { Component } from '@angular/core';
import {UserService} from './services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iprwc';

  constructor(private userService: UserService) {
  }

  destroySession() {
    this.userService.destroySession();
  }
}
