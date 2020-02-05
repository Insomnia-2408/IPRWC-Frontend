import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../services/UserService';
import {Router} from '@angular/router';
import {PopupService} from '../services/PopupService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
    private popupService: PopupService
  ) { }

  onSubmit(form: NgForm) {

    var elements = form.control.controls;

    if(elements.email.invalid) {
      this.popupService.dangerPopup("Please enter a valid email.");
      return;
    }

    this.service.register({
      "email": form.value.email,
      "password": form.value.password,
      "name": form.value.firstname + " " + form.value.lastname,
      "address": form.value.zipcode + " " + form.value.house_number
    }).then(r => this.router.navigate(['/login']));
  }

  ngOnInit() {
  }

}
