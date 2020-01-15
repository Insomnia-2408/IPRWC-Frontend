import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CarModel} from '../models/CarModel';
import {CarService} from '../services/CarService';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  car: CarModel;

  constructor(private router: Router, private service: CarService) { }

  ngOnInit() {
    this.car = this.service.selectedCar;
    console.log(this.car.imagepath);
    this.checkNotNull();
  }

  checkNotNull() {
    if(this.car == null) {
      this.router.navigate(['/cars']);
    }
  }

}
