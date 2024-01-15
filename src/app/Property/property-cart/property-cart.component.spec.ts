import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCartComponent } from './property-cart.component';

describe('PropertyCartComponent', () => {
  let component: PropertyCartComponent;
  let fixture: ComponentFixture<PropertyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
