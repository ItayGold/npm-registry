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
  BsLocaleService,
} from 'ngx-bootstrap/datepicker';

import * as locales from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

export interface Message {
  type: string;
  val: any;
  data?: any;
}

/**
 * click/date-picker's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://npm-demo.goup.tech/date-picker</example-url>
 */
@Component({
  selector: 'click-date-picker',
  templateUrl: './click-date-picker.component.html',
  styleUrls: ['./click-date-picker.component.scss'],
})
export class ClickDatePickerComponent implements OnInit {
  @Input() selectedDate: Date;
  @Input() todayDate: Date = new Date();
  @Input() todayButtonText: string;
  @Output() updateDateStore: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateMsgStore: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('dp', { static: false }) datepicker: BsDaterangepickerDirective;
  @Input() showWeekNumbers: boolean;
  @Input() isOpen: boolean;
  @Input() locale?: string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  previousDate: Date = new Date(null);
  moduleStrings: any = {};
  localeExists = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private localeService: BsLocaleService
  ) {}

  ngOnInit(): void {
    this.datePickerConfig = Object.assign(
      {},
      { showWeekNumbers: this.showWeekNumbers }
    );

    for (const locale in locales) {
      if (locales[locale].abbr === this.locale) {
        this.setLocale(locales[locale].abbr, locales[locale]);
        break;
      } else if (locales[locale].abbr === this.locale.slice(0, 2)) {
        this.locale = this.locale.slice(0, 2);
        this.setLocale(locales[locale].abbr, locales[locale]);
        break;
      }
    }

    if (!this.localeExists) {
      this.localeService.use('en');
    }
  }

  setLocale(localeAbbr, locale) {
    defineLocale(localeAbbr, locale);
    this.localeService.use(this.locale);
    this.localeExists = true;
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
    this.selectedDate = dt;
    this.previousDate = new Date(dt);
    const formattedDate: string = this.formatDate(dt.toString());
    this.updateDateStore.emit(formattedDate);
  }

  private addUIChanges(): void {
    const divNode = document.createElement('div');
    divNode.classList.add('dpButtons');
    const todayButtonElem = document.createElement('div');
    const textnode = document.createTextNode(this.todayButtonText);
    todayButtonElem.addEventListener('click', () => {
      this.setToday();
    });
    todayButtonElem.classList.add('todayButton');
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
