import {NgForm} from '@angular/forms';
import {UserService} from '../services/UserService';
import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PopupService} from '../services/PopupService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  constructor(private service: UserService,
              private router: Router,
              private popupService: PopupService
  ) { }

  onSubmit(form: NgForm) {
    var elements = form.control.controls;

    if(elements.email.invalid) {
      this.popupService.dangerPopup("Please enter a valid email.");
      return;
    }

    if(elements.password.invalid) {
      this.popupService.dangerPopup("Please enter a password.");
      return;
    }

    this.service.login(form.value);

  }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.service.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

}
