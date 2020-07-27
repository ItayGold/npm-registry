import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDatepickerRangeComponent } from './click-date-picker-range.component';

describe('ClickDatepickerRangeComponent', () => {
  let component: ClickDatepickerRangeComponent;
  let fixture: ComponentFixture<ClickDatepickerRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClickDatepickerRangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDatepickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
