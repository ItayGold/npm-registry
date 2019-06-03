import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDatePickerRangeComponent } from './click-date-picker-range.component';

describe('ClickDatePickerRangeComponent', () => {
  let component: ClickDatePickerRangeComponent;
  let fixture: ComponentFixture<ClickDatePickerRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDatePickerRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDatePickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
