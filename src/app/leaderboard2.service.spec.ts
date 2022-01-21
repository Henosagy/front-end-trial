import { TestBed } from '@angular/core/testing';

import { Leaderboard2Service } from './leaderboard2.service';

describe('Leaderboard2Service', () => {
  let service: Leaderboard2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Leaderboard2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
