import {NgForm} from '@angular/forms';
import {UserService} from '../services/UserService';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  onSubmit(form: NgForm) {

      this.service.login(
      {"email": form.value.email,
        "password": form.value.password}
        );

  }

  ngOnInit() {
  }

}
