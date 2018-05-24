import { TestBed, inject } from '@angular/core/testing';

import { BClubMessageService } from './b-club-message.service';

describe('BClubMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BClubMessageService]
    });
  });

  it('should be created', inject([BClubMessageService], (service: BClubMessageService) => {
    expect(service).toBeTruthy();
  }));
});
