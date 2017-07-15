import { TestBed, inject } from '@angular/core/testing';

import { InteriorDataService } from './interior-data.service';

describe('InteriorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteriorDataService]
    });
  });

  it('should be created', inject([InteriorDataService], (service: InteriorDataService) => {
    expect(service).toBeTruthy();
  }));
});
