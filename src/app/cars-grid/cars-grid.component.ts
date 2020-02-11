import {Component, OnInit} from '@angular/core';
import {CarService} from '../services/CarService';
import {CarModel} from '../models/CarModel';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarsItemComponent} from './cars-item/cars-item.component';
import {UserService} from '../services/UserService';
import {UserRole} from '../models/UserRole';
import {CarsAddComponent} from './cars-add/cars-add.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars-grid.component.html',
  styleUrls: ['./cars-grid.component.css']
})
export class CarsGridComponent implements OnInit {

  cars = [];
  carsLoaded = false;
  isAdmin = false;

  constructor(
    private router: Router,
    private service: CarService,
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  toSinglePage(car: CarModel) {
    this.service.selectedCar = car;
    this.router.navigate(['/cars-item']);
  }

  ngOnInit() {
    this.getCars();
    this.loadPermissions();
    this.service.carsChanged.subscribe( result => {
      this.getCars();
    });
  }

  getCars() {
    let self = this;
    this.service.getCars(function() {
      self.cars = self.service.cars.slice();
      self.carsLoaded = true;
    });
  }

  loadPermissions() {
    let self = this;
    if(this.userService.isLoggedIn()) {
      this.userService.setUserInfo(function() {
        if(self.userService.user.userRole == UserRole.ADMIN) {
          self.isAdmin = true;
        }
      });
    }
  }

  openInfo(car: CarModel) {
    const modalRef = this.modalService.open(CarsItemComponent,  {size: 'lg'});
    modalRef.componentInstance.car = car;
    modalRef.componentInstance.isAdmin = this.isAdmin;
  }

  openAddCar() {
    if(this.isAdmin) {
      this.modalService.open(CarsAddComponent, {size: 'xl'});
    }
  }

}
