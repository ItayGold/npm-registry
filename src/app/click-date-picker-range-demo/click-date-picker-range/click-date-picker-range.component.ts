import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';

/**
 * click/date-picker's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://localhost:4200/date-picker-range</example-url>
 */
@Component({
  selector: 'click-date-picker-range',
  templateUrl: `./click-date-picker-range.component.html`,
  styles: [`./click-date-picker-range.component.scss`]
})
export class ClickDatepickerRangeComponent implements OnInit {
  @Input() placeholder: string;
  @Output() datePickerRangeEvent: EventEmitter<Date[]>;
  @ViewChild(BsDaterangepickerDirective, { static: false }) datepicker: BsDaterangepickerDirective;
  datePickerConfig: Partial<BsDatepickerConfig>;
  moduleStrings: any = {};
  minDate: Date;
  maxDate: Date;
  dateRangePickerModel: Date[];

  constructor() {
    this.datePickerRangeEvent = new EventEmitter<Date[]>();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.dateRangePickerModel = [this.minDate];
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 180);
  }

  ngOnInit() {
    this.datePickerConfig = Object.assign({}, {
      showWeekNumbers: false,
      outsideEsc: true
    });
  }

  getDatePickerRange(dtRange: Date[]): void {
    dtRange.forEach((date) => {
      date.setHours(0, 0, 0, 0);
    });
    this.datePickerRangeEvent.emit(dtRange);
  }

  click(): boolean {
    this.datepicker.isOpen = !this.datepicker.isOpen;
    return false;
  }

  onKeydown(event: any): void {
    event.stopPropagation();
    event.preventDefault();
    this.click();
  }
}
