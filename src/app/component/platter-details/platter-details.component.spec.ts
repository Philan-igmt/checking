import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatterDetailsComponent } from './platter-details.component';

describe('PlatterDetailsComponent', () => {
  let component: PlatterDetailsComponent;
  let fixture: ComponentFixture<PlatterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
