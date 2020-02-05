import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ServerModel} from '../models/ServerModel';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {PopupService} from './PopupService';

@Injectable({providedIn: 'root'})
export class UserService {

  host = ServerModel.host;
  port = ServerModel.port;

  constructor(private http: HttpClient, private cookies: CookieService, private popup: PopupService) {}

  async login(loginData: {email: string, password: string}) {

    var url = 'http://' + this.host + ':' + this.port + '/auth/login';

    this.http.post(url, loginData, {responseType: 'text'}).subscribe(res => {
      this.cookies.set('token', res);
      },
        error => {
          this.handleError(error);
        }
      );

  }

  async register(formData: {email: string, password: string, name: string, address: string}) {

    var url = "http://" + this.host + ":" + this.port + "/users/register";

    this.http.post(url, formData).subscribe( r=> {

    }, error => {
      this.handleError(error);
    });

  }

  isLoggedIn() {
    return this.cookies.get('token');
  }

  destroySession() {
    var url = "http://" + this.host + ":" + this.port + "/logout";
    let headers = new HttpHeaders();
    headers.set('token', this.cookies.get('token'));

    this.http.delete(url, { headers: headers}).subscribe();

    this.cookies.delete('token');
    location.reload();
  }

  handleError(error: any) {
    if(error.status == 404 || error.status == 400) {
      this.popup.dangerPopup("Your credentials do not match our records.")
    } else {
      this.popup.dangerPopup("Something went wrong, try again later.");
    }
  }

}
