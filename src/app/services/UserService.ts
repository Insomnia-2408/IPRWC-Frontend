import {HttpClient} from '@angular/common/http';
import {ServerModel} from '../models/ServerModel';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class UserService {

  host = ServerModel.host;
  port = ServerModel.port;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  async login(loginData: {email: string, password: string}) {

    var url = 'http://' + this.host + ':' + this.port + '/auth/login';

    this.http.post(url, loginData, {responseType: 'text'}).subscribe(res => {
      this.cookies.set('token', res);
      },
        error => {
          if(error.message.toString().includes("404")) {
            alert("Email and password combination invalid.");
          }
        }
      );

  }

  async register(formData: {email: string, password: string, name: string, address: string}) {

    var url = "http://" + this.host + ":" + this.port + "/users/register";

    this.http.post(url, formData).subscribe();

  }

  isLoggedIn() {
    return this.cookies.get('token');
  }

  destroySession() {
    var url = "http://" + this.host + ":" + this.port + "/" + this.cookies.get('token') + "/logout";

    this.http.delete(url).subscribe();

    this.cookies.delete('token');
    location.reload();
  }

}
