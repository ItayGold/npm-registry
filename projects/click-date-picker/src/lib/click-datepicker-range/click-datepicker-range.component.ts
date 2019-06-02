import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'click-datepicker-range',
  template: `
    <div class="date">
      <input
        type="text"
        #dp="bsDaterangepicker"
        (keydown.enter)="onKeydown($event)"
        placeholder="{{ placeholder }}"
        [(ngModel)]="dateRangePickerModel"
        (ngModelChange)="getDatePickerRange($event)"
        bsDaterangepicker
        [minDate]="minDate"
        [maxDate]="maxDate"
        [bsConfig]="datePickerConfig"
        readonly
      />
      <div class="input-group-btn">
        <button
          class="btn btn-default"
          tabindex="0"
          (keydown.enter)="onKeydown($event)"
          (click)="click()"
        >
          <i class="fa fa-calendar"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .date {
      display: table;
    }
    .date .btn {
      font-size: 16px;
    }
    .date .btn .fa {
      color: #a7a7a7;
    }
    .date input:focus {
      outline: -webkit-focus-ring-color auto 5px !important;
    }
    ::ng-deep .bs-calendar-container > .ng-star-inserted {
      display: flex;
    }
    ::ng-deep .bs-calendar-container button {
      font: 200 14px system-ui;
    }
    ::ng-deep .todayButton {
      text-align: left;
      position: relative;
      font-family: Roboto;
      font-size: 12px;
      cursor: pointer;
      line-height: 1.5;
      color: #0875bf;
      display: inline-block;
      flex-grow: 1;
      padding: 10px 0 10px 15px;
    }
    ::ng-deep .bs-datepicker-body .closeButton {
      text-align: right;
      position: relative;
      font-family: Roboto;
      font-size: 12px;
      cursor: pointer;
      line-height: 1.5;
      color: #0875bf;
      display: inline-block;
      flex-grow: 1;
    }
    ::ng-deep .bs-datepicker-body .hrLine {
      margin: 0 !important;
    }
    ::ng-deep .bs-datepicker-body table th {
      color: #0875bf !important;
      font-family: Roboto;
      font-size: 12px !important;
      line-height: 11px;
      padding: 3px 3px 4px 3px;
    }
    ::ng-deep .bs-datepicker .is-other-month {
      color: #cbcbcb !important;
    }
    ::ng-deep .bs-datepicker-body table td {
      font-size: 12px !important;
    }
    ::ng-deep .bs-datepicker-body .dpButtons {
      display: flex;
    }
    ::ng-deep bs-daterangepicker-container .bs-datepicker-container {
      padding: 10px !important;
    }
    ::ng-deep .bs-datepicker-container .bs-datepicker-head {
      background-color: #0875bf !important;
      height: 50px;
      border-radius: 2px 2px 0 0;
      font-weight: 300 !important;
    }
    ::ng-deep .bs-datepicker-container .bs-datepicker-head button:hover {
      background-color: #0986d3 !important;
    }
    ::ng-deep .bs-datepicker-body table td[class*="select-"] span:after {
      background-color: #0875bf !important;
    }
    ::ng-deep .bs-datepicker-container .bs-datepicker-head .next, ::ng-deep .bs-datepicker-container .bs-datepicker-head .previous {
      font-size: 18px;
      line-height: 18px;
    }
    ::ng-deep .bs-datepicker-container .bs-datepicker-body table td span.selected,
    ::ng-deep .bs-datepicker-container .bs-datepicker-body table td.selected span,
    ::ng-deep .bs-datepicker-container .bs-datepicker-body table td span[class*="select-"]:after,
    ::ng-deep .bs-datepicker-container .bs-datepicker-body table td[class*="select-"] span:after {
      background-color: #0875bf !important;
    }
  `]
})
export class ClickDatepickerRangeComponent implements OnInit {
  @Input() placeholder: string;
  @Output() datePickerRangeEvent: EventEmitter<Date[]>;
  @ViewChild(BsDaterangepickerDirective) datepicker: BsDaterangepickerDirective;
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
