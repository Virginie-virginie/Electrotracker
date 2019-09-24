import { TestBed } from '@angular/core/testing';

import { OffresServiceService } from './offres-service.service';

describe('OffresServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffresServiceService = TestBed.get(OffresServiceService);
    expect(service).toBeTruthy();
  });
});
