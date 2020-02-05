import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/CarService';
import {CarModel} from '../models/CarModel';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarsItemComponent} from '../cars-item/cars-item.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars-grid.component.html',
  styleUrls: ['./cars-grid.component.css']
})
export class CarsGridComponent implements OnInit {

  cars = [];

  constructor(private router: Router,
              private service: CarService,
              private modalService: NgbModal
  ) { }

  toSinglePage(car: CarModel) {
    this.service.selectedCar = car;
    this.router.navigate(['/cars-item']);
  }

  async ngOnInit() {
    await this.service.getCars().subscribe( r => {
      this.cars = r.slice();
    });
  }

  openInfo(car: CarModel) {
    const modalRef = this.modalService.open(CarsItemComponent,  {size: 'lg'});
    modalRef.componentInstance.car = car;
  }
}
