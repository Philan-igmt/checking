import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfomationComponent } from './event-infomation.component';

describe('EventInfomationComponent', () => {
  let component: EventInfomationComponent;
  let fixture: ComponentFixture<EventInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventInfomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
