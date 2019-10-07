import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMessageDialogComponent } from './click-message-dialog.component';

describe('ClickMessageDialogComponent', () => {
  let component: ClickMessageDialogComponent;
  let fixture: ComponentFixture<ClickMessageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickMessageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
