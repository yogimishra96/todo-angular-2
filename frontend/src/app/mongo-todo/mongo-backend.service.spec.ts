import { TestBed, inject } from '@angular/core/testing';

import { MongoBackendService } from './mongo-backend.service';

describe('MongoBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoBackendService]
    });
  });

  it('should be created', inject([MongoBackendService], (service: MongoBackendService) => {
    expect(service).toBeTruthy();
  }));
});
