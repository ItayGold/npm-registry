import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMessageDialogInternalComponent } from './click-message-dialog-internal.component';

describe('ClickMessageDialogComponent', () => {
  let component: ClickMessageDialogInternalComponent;
  let fixture: ComponentFixture<ClickMessageDialogInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickMessageDialogInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickMessageDialogInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
