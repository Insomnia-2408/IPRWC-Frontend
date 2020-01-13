import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsGridComponent } from './cars-grid.component';

describe('CarsComponent', () => {
  let component: CarsGridComponent;
  let fixture: ComponentFixture<CarsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
