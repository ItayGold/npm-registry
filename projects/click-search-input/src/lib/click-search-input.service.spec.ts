import { TestBed } from '@angular/core/testing';

import { ClickSearchInputService } from './click-search-input.service';

describe('ClickSearchInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickSearchInputService = TestBed.get(ClickSearchInputService);
    expect(service).toBeTruthy();
  });
});
