import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDatePickerComponent } from './click-date-picker.component';

describe('ClickDatePickerComponent', () => {
  let component: ClickDatePickerComponent;
  let fixture: ComponentFixture<ClickDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
