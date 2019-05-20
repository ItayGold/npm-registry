import { TestBed } from '@angular/core/testing';

import { ClickIconService } from './click-icon.service';

describe('ClickIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickIconService = TestBed.get(ClickIconService);
    expect(service).toBeTruthy();
  });
});
