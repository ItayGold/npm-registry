import { Component, ViewChild } from '@angular/core';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { ChangeDetectorRef } from '@angular/core';

/**
 * click/date-picker's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/date-picker</example-url>
 */
@Component({
  selector: 'click-date-picker-demo',
  templateUrl: './click-date-picker-demo.component.html',
  styleUrls: ['./click-date-picker-demo.component.scss'],
})
export class ClickDatePickerDemoComponent {
  selectedDate: Date = new Date();
  todayDate: Date = new Date();
  todayButtonText: string = String(`Today`);
  moduleStrings: any = {};
  showWeekNumbers: boolean = false;
  isOpen: boolean = false;
  previousDate: Date = new Date(null);
  @ViewChild('dp', { static: false }) datepicker: BsDaterangepickerDirective;
  constructor(private cdRef: ChangeDetectorRef) { }

  updateDateStore(dt: string): void | boolean {
    if (!this.datepicker.isOpen) {
      return false;
    }

    window.alert(`Date's been updated @Store: ${dt}`);
  }

  updateMsgStore(status: boolean): void {
    window.alert(`Message's been updated @Store: ${status}`);
  }

  onPrevClicked(direction: string) {
    window.alert(`The direction is ${direction}`);
  }

  onNextClicked(direction: string) {
    window.alert(`The direction is ${direction}`);
  }

  getIconName(name: string): void {
    window.alert(`The name of the icon is ${name}`);
  }
}
