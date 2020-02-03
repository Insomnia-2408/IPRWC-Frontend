import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CarModel} from '../models/CarModel';
import {CarService} from '../services/CarService';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.css']
})
export class CarsItemComponent implements OnInit {

  @Input() car: CarModel;

  constructor(private router: Router,
              private service: CarService,
              private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.checkNotNull();
  }

  checkNotNull() {
    if(this.car == null) {
      this.router.navigate(['/cars']);
    }
  }

  close() {
    this.activeModal.close();
  }
}
