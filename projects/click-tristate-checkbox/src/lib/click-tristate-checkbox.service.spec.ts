import { TestBed } from '@angular/core/testing';

import { ClickTristateCheckboxService } from './click-tristate-checkbox.service';

describe('ClickTristateCheckboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickTristateCheckboxService = TestBed.get(ClickTristateCheckboxService);
    expect(service).toBeTruthy();
  });
});
