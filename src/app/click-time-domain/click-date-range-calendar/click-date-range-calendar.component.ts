import {
  Component,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  BsDatepickerConfig,
  BsDaterangepickerConfig,
} from 'ngx-bootstrap/datepicker';

export const configFactory = (config: BsDaterangepickerConfig) => ({
  ...config,
  containerClass: 'theme-dark-blue',
  customTodayClass: 'today',
});
/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://npm-demo.goup.tech/date-range-calendar</example-url>
 */
@Component({
  selector: 'click-date-range-calendar',
  templateUrl: './click-date-range-calendar.component.html',
  styleUrls: ['./click-date-range-calendar.component.scss'],
  providers: [
    {
      provide: BsDatepickerConfig,
      useFactory: configFactory,
      deps: [BsDaterangepickerConfig],
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ClickDateRangeCalendarComponent
  implements AfterViewInit, OnChanges {
  private datePickerInitialized: boolean = false;

  @Input() value: Date[];
  @Output() valueChanged: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  @ViewChild('datepicker', { static: false }) datePicker: any;

  ngAfterViewInit(): void {
    this.datePickerInitialized = true;
    this.updateRange(this.value);
    this.datePicker.valueChange.subscribe((values: Date[]) =>
      this.valueChanged.next(values)
    );
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
