import { TestBed } from '@angular/core/testing';

import { ClickTimeDomainService } from './click-time-domain.service';

describe('ClickTimeDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickTimeDomainService = TestBed.get(ClickTimeDomainService);
    expect(service).toBeTruthy();
  });
});
