import { TestBed } from '@angular/core/testing';

import { GetPlattersService } from './get-platters.service';

describe('GetPlattersService', () => {
  let service: GetPlattersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlattersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
