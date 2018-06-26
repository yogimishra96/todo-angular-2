import { TestBed, inject } from '@angular/core/testing';

import { NumberDetailsService } from './number-details.service';

describe('NumberDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberDetailsService]
    });
  });

  it('should be created', inject([NumberDetailsService], (service: NumberDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
