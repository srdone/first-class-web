import { TestBed, inject } from '@angular/core/testing';

import { ScoutsService } from './scouts.service';

describe('ScoutsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoutsService]
    });
  });

  it('should ...', inject([ScoutsService], (service: ScoutsService) => {
    expect(service).toBeTruthy();
  }));
});
