import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { ChangeDetectorRef } from '@angular/core';

/**
 * Shows all events on a given day. Example usage:
 *
 * @example
 * <example-url>http://localhost:4200/date-picker</example-url>
 */
@Component({
  selector: 'click-demo-date-picker',
  template: `
    <div>
      <h2>Date picker</h2>
      <click-date-picker
        (setDateEvent)="setDateEvent($event)"
        class="dp"
        #dp
        [selectedDate]="selectedDate"
        [todayDate]="todayDate"
        [todayButtonText]="todayButtonText"
      >
      </click-date-picker>
    </div>
  `,
  styles: [
    `
      input {
        position: relative;
        height: 0;
        visibility: hidden;
      }

      .icon,
      .calendar-icon {
        font-size: 20px;
        margin: 20px 10px 20px 20px;
        color: #a7a7a7;
        cursor: pointer;
      }
      .icon:hover,
      .calendar-icon:hover {
        color: #1174be;
      }
      .icon:focus,
      .calendar-icon:focus {
        outline: none;
        color: #1174be;
      }

      .calendar-icon {
        margin: 12px;
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

      ::ng-deep .bs-datepicker-container {
        padding: 0 !important;
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

      ::ng-deep .bs-datepicker-body table td[class*='select-'] span:after {
        background-color: #0875bf !important;
      }

      ::ng-deep .bs-datepicker-container .bs-datepicker-head .next,
      ::ng-deep .bs-datepicker-container .bs-datepicker-head .previous {
        font-size: 18px;
        line-height: 18px;
      }

      ::ng-deep
        .bs-datepicker-container
        .bs-datepicker-body
        table
        td
        span.selected,
      ::ng-deep
        .bs-datepicker-container
        .bs-datepicker-body
        table
        td.selected
        span,
      ::ng-deep
        .bs-datepicker-container
        .bs-datepicker-body
        table
        td
        span[class*='select-']:after,
      ::ng-deep
        .bs-datepicker-container
        .bs-datepicker-body
        table
        td[class*='select-']
        span:after {
        background-color: #0875bf !important;
      }

      ::ng-deep .bs-calendar-container button {
        font: 200 14px system-ui;
      }
    `,
  ],
})
export class DemoDatePickerComponent {
  selectedDate: Date = new Date();
  todayDate: Date = new Date();
  todayButtonText: string = String(`Today`);
  //   @ViewChild('dp') datepicker: BsDaterangepickerDirective;

  previousDate: Date = new Date(null);
  datePickerConfig: Partial<BsDatepickerConfig>;
  moduleStrings: any = {};

  constructor(private cdRef: ChangeDetectorRef) {
    this.datePickerConfig = Object.assign({}, { showWeekNumbers: false });
  }

  setDateEvent($event: Date): void {
    const date = this.formatDate($event);
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
