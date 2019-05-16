import { Component, ViewChild } from '@angular/core';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { ChangeDetectorRef } from '@angular/core';

/**
 * click/date-picker's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://localhost:4200/date-picker</example-url>
 */
@Component({
  selector: 'click-demo-date-picker',
  template: `
    <div>
      <h2>Date picker</h2>
      <click-date-picker
        #dp
        class="dp"
        [isOpen]="isOpen"
        [todayDate]="todayDate"
        [selectedDate]="selectedDate"
        [todayButtonText]="todayButtonText"
        [showWeekNumbers]="showWeekNumbers"
        (updateDateStore)="updateDateStore($event)"
        (updateMsgStore)="updateMsgStore($event)"
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
  moduleStrings: any = {};
  showWeekNumbers: boolean = false;
  isOpen: boolean = false;

  previousDate: Date = new Date(null);
  @ViewChild('dp') datepicker: BsDaterangepickerDirective;
  constructor(private cdRef: ChangeDetectorRef) {}

  updateDateStore(dt: string): void {
    alert(`Date's been updated @Store: ${dt}`);
  }

  updateMsgStore(status: boolean): void {
    alert(`Message's been updated @Store: ${status}`);
  }
}
