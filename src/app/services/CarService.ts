import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CarModel} from '../models/CarModel';
import {ServerModel} from '../models/ServerModel';
import {UserService} from './UserService';
import {PopupService} from './PopupService';

@Injectable({providedIn: 'root'})
export class CarService {

  cars: CarModel[];
  selectedCar;
  carsChanged = new EventEmitter();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private popupService: PopupService
  ) { }

  getCars(callback?: Function) {
    var url = "http://" + ServerModel.host + ":" + ServerModel.port + "/cars";
    this.http.get<CarModel[]>(url).subscribe(response => {
      this.cars = response;
      if(callback) {
        callback();
      }
    });
  }

  getCarById(id: number) {
    for(let car of this.cars) {
      if(car.id == id) {
        return car;
      }
    }
    return null;
  }

  remove(car: CarModel) {
    var url = "http://" + ServerModel.host + ":" + ServerModel.port + "/cars/" + car.id;

    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.userService.isLoggedIn()
      })
    };

    this.http.delete(url, httpOptions).subscribe(response => {
      this.popupService.infoPopup(car.model + " has been deleted.");
      this.carsChanged.emit();
    }, error => {
      this.popupService.dangerPopup("An unexpected error occurred, please try again later.");
    });
  }

  add(car: CarModel) {
    var url = "http://" + ServerModel.host + ":" + ServerModel.port + "/cars";

    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.userService.isLoggedIn()
      })
    };

    this.http.post(url, car, httpOptions).subscribe( response => {
      this.carsChanged.emit();
      this.popupService.infoPopup("Successfully added the new car.")
    }, error => {
      console.log(error);
    });

  }
}
