import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiresGridComponent } from './tires-grid.component';

describe('TiresGridComponent', () => {
  let component: TiresGridComponent;
  let fixture: ComponentFixture<TiresGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiresGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiresGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
