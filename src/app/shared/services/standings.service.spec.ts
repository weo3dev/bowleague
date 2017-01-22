/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StandingsService } from './standings.service';

describe('StandingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandingsService]
    });
  });

  it('should ...', inject([StandingsService], (service: StandingsService) => {
    expect(service).toBeTruthy();
  }));
});
