import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDatePickerRangeDemoComponent } from './click-date-picker-range-demo.component';

describe('ClickDatePickerRangeDemoComponent', () => {
  let component: ClickDatePickerRangeDemoComponent;
  let fixture: ComponentFixture<ClickDatePickerRangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDatePickerRangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDatePickerRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
