import { Component, ViewChild, AfterViewInit, EventEmitter, Output, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BsDatepickerConfig, BsDaterangepickerConfig } from 'ngx-bootstrap';

export function configFactory(config: BsDaterangepickerConfig) {
  return {
    ...config,
    containerClass: 'theme-dark-blue',
    customTodayClass: 'today',
  };
} 

@Component({
  selector: 'click-date-range-calendar',
  template: `<bs-daterangepicker-container #datepicker></bs-daterangepicker-container>`,
  styles: [`
    .bs-datepicker {
      box-shadow: none;
      justify-content: center;
    }
    .bs-datepicker-container {
      padding: 0;
    }
    .bs-datepicker-container, bs-daterangepicker-container {
      position: relative !important;
    }
    .today {
      background-color: #daebf6;
      color: #0875bf;
    }
    .theme-dark-blue .bs-datepicker-body table .today.select-start, .theme-dark-blue .bs-datepicker-body table td .today.select-start {
      background-color: #08559d;
    }
    .theme-dark-blue .bs-datepicker-head {
      background-color: #0875bf;
    }
    .theme-dark-blue .bs-datepicker-body table td span.selected, .theme-dark-blue .bs-datepicker-body table td.selected span, .theme-dark-blue .bs-datepicker-body table td span[class*='select-']:after, .theme-dark-blue .bs-datepicker-body table td[class*='select-'] span:after {
      background-color: #0875bf;
    }
    .theme-dark-blue .bs-datepicker-body {
      padding: 12px 15px;
    }
    .theme-dark-blue .bs-datepicker-body table th {
      color: #0875bf;
      font-size: 14px;
    }
    .theme-dark-blue .bs-datepicker-body table th:first-child {
      display: none;
    }
    .theme-dark-blue .bs-datepicker-body table td {
      color: #595959;
      font-size: 14px;
    }
    .theme-dark-blue .bs-datepicker-body table td.week {
      display: none;
    }
    .theme-dark-blue .bs-datepicker-body table td:before, .theme-dark-blue .bs-datepicker-body table td span:before {
      top: 4px;
      bottom: 4px;
      left: -10px;
      right: -10px;
    }
    .theme-dark-blue .bs-datepicker-body table td:nth-child(2):before, .theme-dark-blue .bs-datepicker-body table td:nth-child(2) span:before {
      left: 0;
    }
    .theme-dark-blue .bs-datepicker-body table td:nth-child(2) .today:before {
      left: 10px;
    }
    .theme-dark-blue .bs-datepicker-body table td:last-child:before, .theme-dark-blue .bs-datepicker-body table td:last-child span:before {
      right: 0;
    }
    .theme-dark-blue .bs-datepicker-body table td .is-other-month:before, .theme-dark-blue .bs-datepicker-body table td .is-other-month span:before {
      background-color: #fff;
    }
    .theme-dark-blue .bs-datepicker-body table.days td.active:before, .theme-dark-blue .bs-datepicker-body table.days td.in-range:before, .theme-dark-blue .bs-datepicker-body table.days span.active:before, .theme-dark-blue .bs-datepicker-body table.days span.in-range:before {
      background: #f0f0f0;
    }
    .theme-dark-blue .bs-datepicker-body table.days span.in-range.select-start:before {
      background: transparent;
    }
    .theme-dark-blue .bs-datepicker-body table.days span.is-highlighted.in-range:before, .theme-dark-blue .bs-datepicker-body table.days span.in-range.select-start:before, .theme-dark-blue .bs-datepicker-body table.days span.select-end:before {
      left: 10px;
    }
    .theme-dark-blue .bs-datepicker-body table.days span.is-highlighted.in-range:before, .theme-dark-blue .bs-datepicker-body table.days span.in-range.select-end:before {
      right: 10px;
    }
    .theme-dark-blue .bs-datepicker-body table.days span.is-other-month:after, .theme-dark-blue .bs-datepicker-body table.days span.is-other-month:before {
      background-color: #fff;
      left: -2px;
      right: -2px;
      content: '';
      display: block;
      position: absolute;
      top: 2px;
      bottom: 2px;
      box-sizing: content-box;
      width: 9px;
    }
    .theme-dark-blue .bs-datepicker-body table.days span.is-other-month:before {
      left: -2px;
      right: auto;
    }
    .theme-dark-blue .bs-datepicker-body table.days span.is-other-month:after {
      left: auto;
      right: -2px;
    }
    .bs-datepicker-head button:hover {
      background-color: #0986d3;
    }
    .bs-datepicker-body table td span.is-other-month, .bs-datepicker-body table td.is-other-month span {
      color: #cbcbcb;
    }
  `],
  providers: [{
    provide: BsDatepickerConfig,
    useFactory: configFactory,
    deps: [BsDaterangepickerConfig]
  }],
  encapsulation: ViewEncapsulation.None
})
export class ClickDateRangeCalendarComponent implements AfterViewInit, OnChanges {

  private datePickerInitialized: boolean = false;

  @Input() value: Date[];
  @Output() valueChanged: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  @ViewChild('datepicker') datePicker: any;

  ngAfterViewInit(): void {
    this.datePickerInitialized = true;
    this.updateRange(this.value);
    this.datePicker.valueChange.subscribe((values: Date[]) => this.valueChanged.next(values));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { value } = changes;
    if (this.datePickerInitialized && value) {
      this.updateRange(value.currentValue);
    }
  }

  updateRange(values: Date[]): void {
    setTimeout(() => {
      this.datePicker._rangeStack = [...values];
      this.datePicker.value = [...values];

      if (this.datePicker._rangeStack.length === 2) {
        this.datePicker._rangeStack = [];
      }
    });
  }
}