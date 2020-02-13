import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {BodyType, CarType, EnergyLabel, FuelType, Transmission} from '../../models/CarModel';
import {CarService} from '../../services/CarService';
import {PopupService} from '../../services/PopupService';

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

  carTypes = Object.keys(CarType);
  bodyTypes = Object.keys(BodyType);
  transmissions = Object.keys(Transmission);
  fuelTypes = Object.keys(FuelType);
  energyLabels = Object.keys(EnergyLabel);

  constructor(
    private activeModal: NgbActiveModal,
    private service: CarService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  onSubmit(form: NgForm) {

    if(form.valid) {
      let car = this.service.createCarFromForm(form);
      this.service.add(car);
      this.activeModal.close();
    } else {
      this.popupService.dangerPopup("Please enter valid information.")
    }

  }

}
