import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/UserService';
import {UserModel} from '../models/UserModel';
import {NgForm} from '@angular/forms';
import {PopupService} from '../services/PopupService';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  user: UserModel;
  userIsSet = false;
  editMode = false;

  firstname;
  lastname;
  email;
  zipcode;
  house_number;

  constructor(
    private router: Router,
    private userService: UserService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
    if(!this.userService.isLoggedIn()) {
      this.router.navigate(['/']);
    } else {
      let self = this;
      this.userService.setUserInfo(function() {
        self.user = self.userService.user;
        self.userIsSet = true;
        self.setInfo();
      });
    }
  }

  switchMode() {
    this.editMode = !this.editMode;
  }

  onSubmit(form: NgForm) {

    var elements = form.control.controls;
    if(elements.email.valid) {
      if(this.checkIfChanged()) {
        this.updateThisUser();
        this.userService.updateUser(this.user);
      }
    }

    this.switchMode();

  }

  private setInfo() {
    let names = this.user.name.split(" ");
    this.firstname = names[0];
    this.lastname = names[1];
    this.email = this.user.email;
    let address = this.user.address.split(" ");
    this.zipcode = address[0];
    this.house_number = address[1];
  }

  private checkIfChanged() {

    if(this.user.name == this.firstname + " " + this.lastname &&
      this.user.email == this.email &&
      this.user.address == this.zipcode + " " + this.house_number) {
        return false;
    } else {
      return true;
    }

  }

  private updateThisUser() {
    this.user.name = this.firstname + " " + this.lastname;
    this.user.email = this.email;
    this.user.address = this.zipcode + " " + this.house_number;
  }

}
