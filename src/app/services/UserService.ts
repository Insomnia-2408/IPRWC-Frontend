import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ServerModel} from '../models/ServerModel';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {PopupService} from './PopupService';
import {UserModel} from '../models/UserModel';

@Injectable({providedIn: 'root'})
export class UserService {

  host = ServerModel.host;
  port = ServerModel.port;
  user: UserModel;

  constructor(private http: HttpClient, private cookies: CookieService, private popup: PopupService) {
    this.checkIsLoggedIn();
  }

  async login(loginData: {email: string, password: string}) {

    var url = 'http://' + this.host + ':' + this.port + '/auth/login';

    this.http.post(url, loginData, {responseType: 'text'}).subscribe(res => {
      this.cookies.set('token', res);
      this.setUserInfo();
      },
        error => {
          this.handleError(error);
        }
      );
  }

  async register(formData: {email: string, password: string, name: string, address: string}) {

    var url = "http://" + this.host + ":" + this.port + "/users/register";

    this.http.post(url, formData).subscribe( response => {

    }, error => {
      this.handleError(error);
    });

  }

  isLoggedIn() {
    return this.cookies.get('token');
  }

  destroySession() {
    var url = "http://" + this.host + ":" + this.port + "/auth/logout";

    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.cookies.get('token')
      })
    };

    this.http.delete(url, httpOptions).subscribe( response => {
      this.popup.succesPopup("Successfully logged out.");
    });

    this.user = null;
    this.cookies.delete('token');
  }

  handleError(error: any) {
    if(error.status == 404 || error.status == 400) {
      this.popup.dangerPopup("Your userdata does not match our records.")
    } else {
      this.popup.dangerPopup("Something went wrong, try again later.");
    }
  }

  setUserInfo(callback?: Function) {
    var url = "http://" + this.host + ":" + this.port + "/auth/getThisUser";
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.cookies.get('token')
      })
    };

    this.http.get<UserModel>(url, httpOptions).subscribe(response => {
      this.user = response;
      if(callback) {
        callback();
      }
    }, error => {
      this.handleError(error);
    });
  }

  checkIsLoggedIn() {
    if(this.isLoggedIn() && this.user == null) {
      this.setUserInfo();
    } else {
      return;
    }
  }

  updateUser(newUser: UserModel) {
    var url = "http://" + this.host + ":" + this.port + "/users/editUserData";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.cookies.get('token')
      })
    };

    this.http.put<UserModel>(url, newUser, httpOptions).subscribe( response => {
      this.popup.succesPopup('The changes were succesfully executed.');
    }, error => {
      this.handleError(error);
    });
  }
}
