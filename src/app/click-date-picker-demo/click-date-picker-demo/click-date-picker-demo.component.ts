import { Component, ViewChild } from '@angular/core';
import {
  BsDaterangepickerDirective,
  BsLocaleService,
} from 'ngx-bootstrap/datepicker';
import { ChangeDetectorRef } from '@angular/core';

/**
 * click/date-picker's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://npm-demo.goup.tech/date-picker</example-url>
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
  locale?: string = 'en';
  @ViewChild('dp', { static: false }) datepicker: BsDaterangepickerDirective;

  constructor(private cdRef: ChangeDetectorRef) {}

  updateDateStore(dt: string): void | boolean {
    const newDate = new Date(dt);

    if (newDate.getTime() !== this.previousDate.getTime()) {
      this.previousDate = newDate;
      if (this.datepicker && !this.datepicker.isOpen) {
        window.alert(`Date's been updated @Store: ${dt}`);
      }
    }
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
