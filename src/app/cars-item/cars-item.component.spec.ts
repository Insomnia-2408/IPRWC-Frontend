import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsItemComponent } from './cars-item.component';

describe('CarsItemComponent', () => {
  let component: CarsItemComponent;
  let fixture: ComponentFixture<CarsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
