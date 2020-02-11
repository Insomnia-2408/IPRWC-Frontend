import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {BodyType, CarModel, CarType, EnergyLabel, FuelType, Transmission} from '../../models/CarModel';
import {CarService} from '../../services/CarService';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  //Form variables
  carType = CarType.NEW;
  brand = null;
  mileage = null;
  options = null;
  transmission = Transmission.MANUAL;
  fuelType = FuelType.GASOLINE;
  buildYear = null;
  doors = null;
  model = null;
  numberplate = null;
  bodyType = BodyType.SEDAN;
  motorType = null;
  horsepower = null;
  seats = null;
  gears = null;
  energyLabel = EnergyLabel.A;
  apk = null;
  imagePath = null;
  price = null;

  constructor(
    private activeModal: NgbActiveModal,
    private service: CarService
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  onSubmit(form: NgForm) {
    let car = new CarModel(
      form.value.carType, form.value.brand, form.value.mileage, form.value.options, form.value.transmission, form.value.fuelType,
      form.value.buildYear, form.value.doors, form.value.model, form.value.numberplate, form.value.bodyType, form.value.motorType,
      form.value.horsepower, form.value.seats, form.value.gears, form.value.energyLabel, form.value.apk, form.value.imagePath, form.value.price);
    this.service.add(car);
    this.activeModal.close();
  }

}
