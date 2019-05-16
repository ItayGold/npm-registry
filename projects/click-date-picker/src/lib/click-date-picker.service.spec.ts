import { TestBed } from '@angular/core/testing';

import { ClickDatePickerService } from './click-date-picker.service';

describe('ClickDatePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickDatePickerService = TestBed.get(ClickDatePickerService);
    expect(service).toBeTruthy();
  });
});
