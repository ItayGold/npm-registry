import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import {
  BsDatepickerConfig,
  BsDaterangepickerDirective,
  BsLocaleService
} from 'ngx-bootstrap/datepicker';

import * as locales from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

export interface Message {
  type: string;
  val: any;
  data?: any;
}

@Component({
  selector: 'click-date-picker',
  template: `
    <div>
      <input
        type="text"
        class="custom-input"
        #dp="bsDatepicker"
        bsDatepicker
        [bsValue]="selectedDate"
        [bsConfig]="datePickerConfig"
        (onShown)="addDatePickerUIChanges()"
        (bsValueChange)="dateChange($event)"
      />
    </div>
  `,
  styles: [
    `
      .custom-input {
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

      ::ng-deep .today-button {
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
export class ClickDatePickerComponent implements OnInit {
  @Input() selectedDate: Date;
  @Input() todayDate: Date = new Date();
  @Input() todayButtonText?: string = `Today`;
  @Output() updateDateStore: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateMsgStore: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('dp', { static: false }) datepicker: BsDaterangepickerDirective;
  @Input() showWeekNumbers?: boolean = false;
  @Input() isOpen?: boolean = false;
  @Input() locale?: string;
  datePickerConfig?: Partial<BsDatepickerConfig>;
  previousDate: Date = new Date(null);
  moduleStrings: any = {};

  constructor(private cdRef: ChangeDetectorRef, private localeService: BsLocaleService) { }

  ngOnInit(): void {
    this.datePickerConfig = Object.assign(
      {},
      { showWeekNumbers: this.showWeekNumbers }
    );

    let localeExists = false;
    for (const locale in locales) {
      if (locales[locale].abbr === this.locale) {
        defineLocale(locales[locale].abbr, locales[locale]);
        localeExists = true;
      }
    }

    if (localeExists) {
      this.localeService.use(this.locale);
    } else {
      this.localeService.use('en');
    }
  }

  click() {
    this.datepicker.isOpen = !this.datepicker.isOpen;
    this.updateMsgStore.emit(Boolean(this.datepicker.isOpen));
  }

  addDatePickerUIChanges(): void {
    this.addUIChanges();
    const itemClicked = Array.from(
      document.querySelectorAll('.next , .previous, .current')
    );
    itemClicked.forEach(e => {
      e.addEventListener('click', () => {
        this.addDatePickerUIChanges();
      });
    });
  }

  dateChange(dt: Date): void {
    dt.setHours(0, 0, 0, 0);
    if (dt.getTime() !== this.previousDate.getTime()) {
      this.selectedDate = dt;
      this.previousDate = new Date(dt);
      if (this.datepicker.isOpen) {
        const formattedDate: string = this.formatDate(dt.toString());
        this.updateDateStore.emit(formattedDate);
      }
    }
  }

  private addUIChanges(): void {
    const divNode = document.createElement('div');
    divNode.classList.add('dpButtons');
    const todayButtonElem = document.createElement('div');
    const textnode = document.createTextNode(this.todayButtonText);
    todayButtonElem.addEventListener('click', () => {
      this.setToday();
    });
    todayButtonElem.classList.add('today-button');
    todayButtonElem.appendChild(textnode);

    document.querySelector('bs-calendar-layout').appendChild(todayButtonElem);
  }

  private setToday(): void {
    this.selectedDate = this.todayDate;
    this.cdRef.detectChanges();
  }

  private formatDate(date: string): string {
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
