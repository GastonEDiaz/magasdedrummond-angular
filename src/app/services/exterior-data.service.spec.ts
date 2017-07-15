import { TestBed, inject } from '@angular/core/testing';

import { ExteriorDataService } from './exterior-data.service';

describe('ExteriorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExteriorDataService]
    });
  });

  it('should be created', inject([ExteriorDataService], (service: ExteriorDataService) => {
    expect(service).toBeTruthy();
  }));
});
