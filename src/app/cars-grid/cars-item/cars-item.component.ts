import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BodyType, CarModel, CarType, EnergyLabel, FuelType, Transmission} from '../../models/CarModel';
import {CarService} from '../../services/CarService';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingcartService} from '../../services/ShoppingcartService';
import {PopupService} from '../../services/PopupService';
import {Product} from '../../models/Product';
import {ProductType} from '../../models/ProductType';
import {error} from 'util';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  @Input() car: CarModel;
  @Input() isAdmin: boolean = false;
  editMode = false;

  carTypes = Object.keys(CarType);
  bodyTypes = Object.keys(BodyType);
  transmissions = Object.keys(Transmission);
  fuelTypes = Object.keys(FuelType);
  energyLabels = Object.keys(EnergyLabel);

  constructor(private router: Router,
              private service: CarService,
              private shoppingcartService: ShoppingcartService,
              private popupService: PopupService,
              private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.checkNotNull();
    this.shoppingcartService.init();
  }

  checkNotNull() {
    if(this.car == null) {
      this.activeModal.close();
    }
  }

  close() {
    this.activeModal.close();
  }

  addToCart() {
    this.close();
    let product = new Product(this.car.model, this.car.id, ProductType.CAR, 1, this.car.imagePath, this.car.price);
    this.shoppingcartService.addItem(product);
    this.popupService.infoPopup("The " + this.car.model + " was added to your cart");
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  removeCar() {
    this.popupService.showConfirmPopup("Are you sure you want to delete " + this.car.model + "?" + "\n" +
    "This cannot be reversed.").then(promise => {
      this.service.remove(this.car);
      this.activeModal.close();
    }, cancel => {
      this.popupService.infoPopup(this.car.model + " was not deleted.");
      this.activeModal.close();
    })
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      let editedCar = this.service.createCarFromForm(form);
      editedCar.id = this.car.id;
      this.service.edit(editedCar);
      this.activeModal.close();
    } else {
      this.popupService.dangerPopup("Please enter valid information.")
    }
    this.toggleEdit();
  }

}
