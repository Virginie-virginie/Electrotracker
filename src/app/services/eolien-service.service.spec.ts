import { TestBed } from '@angular/core/testing';

import { EolienServiceService } from './eolien-service.service';

describe('EolienServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EolienServiceService = TestBed.get(EolienServiceService);
    expect(service).toBeTruthy();
  });
});
