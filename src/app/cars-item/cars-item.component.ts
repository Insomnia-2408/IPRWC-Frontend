import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarModel} from '../models/CarModel';
import {CarService} from '../services/CarService';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingcartService} from '../services/ShoppingcartService';
import {PopupService} from '../services/PopupService';
import {Product} from '../models/Product';
import {ProductType} from '../models/ProductType';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  @Input() car: CarModel;

  constructor(private router: Router,
              private service: CarService,
              private shoppingcartService: ShoppingcartService,
              private popupService: PopupService,
              private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.checkNotNull();
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
}