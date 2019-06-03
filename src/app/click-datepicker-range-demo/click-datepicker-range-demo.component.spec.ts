import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDatepickerRangeDemoComponent } from './click-datepicker-range-demo.component';

describe('ClickDatepickerRangeDemoComponent', () => {
  let component: ClickDatepickerRangeDemoComponent;
  let fixture: ComponentFixture<ClickDatepickerRangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDatepickerRangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDatepickerRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
