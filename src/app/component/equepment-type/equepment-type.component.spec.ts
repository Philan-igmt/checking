import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquepmentTypeComponent } from './equepment-type.component';

describe('EquepmentTypeComponent', () => {
  let component: EquepmentTypeComponent;
  let fixture: ComponentFixture<EquepmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquepmentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquepmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
