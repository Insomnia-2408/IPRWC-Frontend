import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServicesComponent } from './car-services.component';

describe('CarServicesComponent', () => {
  let component: CarServicesComponent;
  let fixture: ComponentFixture<CarServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
