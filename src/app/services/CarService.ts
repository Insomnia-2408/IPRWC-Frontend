import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarModel} from '../models/CarModel';
import {ServerModel} from '../models/ServerModel';
import {UserService} from './UserService';

@Injectable({providedIn: 'root'})
export class CarService {

  cars: CarModel[];
  selectedCar;

  constructor(private http: HttpClient, private userService: UserService) {
  }

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

}
