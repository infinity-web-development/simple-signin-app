import { TestBed, inject } from '@angular/core/testing';

import { FocusGeneratorService } from './focus-generator.service';

describe('FocusGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FocusGeneratorService]
    });
  });

  it('should be created', inject([FocusGeneratorService], (service: FocusGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
