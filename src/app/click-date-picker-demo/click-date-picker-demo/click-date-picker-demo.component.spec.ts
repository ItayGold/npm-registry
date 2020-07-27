import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDatePickerDemoComponent } from './click-date-picker-demo.component';

describe('ClickDatePickerDemoComponent', () => {
  let component: ClickDatePickerDemoComponent;
  let fixture: ComponentFixture<ClickDatePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDatePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
