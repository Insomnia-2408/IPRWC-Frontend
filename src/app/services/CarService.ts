import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CarModel} from '../models/CarModel';
import {ServerModel} from '../models/ServerModel';
import {UserService} from './UserService';
import {PopupService} from './PopupService';
import {NgForm} from '@angular/forms';

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
    }, error => {
      this.handleError(error);
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
      this.handleError(error);
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
      this.handleError(error);
    });

  }

  createCarFromForm(form: NgForm){
    let car = new CarModel(
      form.value.carType, form.value.brand, form.value.mileage, form.value.options, form.value.transmission, form.value.fuelType,
      form.value.buildYear, form.value.doors, form.value.model, form.value.numberplate, form.value.bodyType, form.value.motorType,
      form.value.horsepower, form.value.seats, form.value.gears, form.value.energyLabel, form.value.apk, form.value.imagePath, form.value.price);

    return car;
  }

  edit(car: CarModel) {
    var url = "http://" + ServerModel.host + ":" + ServerModel.port + "/cars";

    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.userService.isLoggedIn()
      })
    };

    this.http.put(url, car, httpOptions).subscribe( response => {
      this.popupService.succesPopup("Succesfully updated " + car.model + ".");
      this.carsChanged.emit();
    }, error => {
      this.handleError(error);
    });

  }

  handleError(error: any) {
    this.popupService.dangerPopup("An unexpected error occurred, please try again later.")
  }

}
