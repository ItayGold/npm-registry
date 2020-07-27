import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/**
 * click/date-picker's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://npm-demo.goup.tech/date-picker-range</example-url>
 */
@Component({
  selector: 'app-click-date-picker-range-demo',
  templateUrl: './click-date-picker-range-demo.component.html',
  styleUrls: ['./click-date-picker-range-demo.component.scss'],
})
export class ClickDatePickerRangeDemoComponent implements OnInit {
  @Input() placeholder: string;
  @Output() datePickerRangeEvent: EventEmitter<Date[]>;
  @ViewChild(BsDaterangepickerDirective, { static: false })
  datepicker: BsDaterangepickerDirective;
  datePickerConfig: Partial<BsDatepickerConfig>;
  moduleStrings: any = {};
  minDate: Date;
  maxDate: Date;
  dateRangePickerModel: Date[];
  dtPlaceholder: string;

  constructor() {
    this.datePickerRangeEvent = new EventEmitter<Date[]>();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.dateRangePickerModel = [this.minDate];
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 180);
    this.dtPlaceholder = `Select Date Range`;
  }

  ngOnInit() {
    this.datePickerConfig = Object.assign(
      {},
      {
        showWeekNumbers: false,
        outsideEsc: true,
      }
    );
  }

  onDtRangeChanged(dtRange: Date[]): void {
    window.alert(`The date range is: ${dtRange.join('-')}`);
  }
}
