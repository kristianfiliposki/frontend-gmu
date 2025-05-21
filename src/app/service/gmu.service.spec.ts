import { TestBed } from '@angular/core/testing';

import { GmuService } from './gmu.service';

describe('GmuService', () => {
  let service: GmuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
