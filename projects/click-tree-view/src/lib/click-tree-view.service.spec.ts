import { TestBed } from '@angular/core/testing';

import { ClickTreeViewService } from './click-tree-view.service';

describe('ClickTreeViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickTreeViewService = TestBed.get(ClickTreeViewService);
    expect(service).toBeTruthy();
  });
});
