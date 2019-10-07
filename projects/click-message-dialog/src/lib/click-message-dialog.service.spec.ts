import { TestBed } from '@angular/core/testing';

import { MessageDialogService } from './click-message-dialog.service';

describe('MessageDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageDialogService = TestBed.get(MessageDialogService);
    expect(service).toBeTruthy();
  });
});
