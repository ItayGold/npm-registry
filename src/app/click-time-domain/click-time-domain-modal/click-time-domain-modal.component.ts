import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { Subject } from 'rxjs';

import {
  revealDelimiter,
  correctInputMaskTo,
  correctInputMaskFrom,
} from '../helpers/w6-mask-helper';

import {
  format,
  addDays,
  diffDays,
  toUtcDate,
  removeTime,
  toLocalDate,
  isDateValid,
  checkRangeMatching,
  parseFormattedDate,
} from '../helpers/w6-date-helper';

enum Errors {
  Valid = '',
  StartInvalid = 'Invalid start date',
  EndInvalid = 'Invalid end date',
}

@Component({
  selector: 'click-time-domain-modal',
  templateUrl: './click-time-domain-modal.component.html',
  styleUrls: ['./click-time-domain-modal.component.scss'],
  providers: [
    {
      provide: BsDatepickerConfig,
      useClass: BsDaterangepickerConfig
    }
  ],
})
export class ClickTimeDomainModalComponent implements OnInit {

  Errors = Errors;

  to: Date;
  from: Date;
  currentDate: Date;
  dateRangeInit: Date[];
  dateRangeValue: Date[];
  dateRangeChanged: Date[];
  dateInputWidth: string;
  differenceInDays: number;
  offsetTimezone: number;
  onClose: Subject<boolean> = new Subject();
  error = 'Valid';
  isUpdated = false;
  isRelative: boolean;
  isRelativeTouched = false;

  mask: string;
  delimiter: string;
  inputMaskTo: string;
  inputMaskFrom: string;

  @ViewChild('firstInputDate') firstInputDate: ElementRef;
  @ViewChild('secondInputDate') secondInputDate: ElementRef;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {
    this.delimiter = revealDelimiter(this.mask);
    this.dateRangeInit = [...this.dateRangeValue];
    this.dateRangeChanged = [...this.dateRangeValue];
    this.setInputValues(this.dateRangeValue);
  }

  confirm() {
    if (!this.isUpdated || this.error !== 'Valid') return;

    this.onClose.next();
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }

  closeModalWithEnter() {
    this.confirm();
  }

  get fromFormatted() {
    return format(this.from, this.mask); // Do not set any calculation here
  }

  get toFormatted() {
    return format(this.to, this.mask); // Do not set any calculation here
  }

  getDateFromKeyupEvent({ target: { value }, key }) {
    const dayOffset =
      (key === 'ArrowUp') ? 1 :
      (key === 'ArrowDown') ? -1 : 0;
    const parsedDate = parseFormattedDate(value, this.mask, this.delimiter);
    return addDays(parsedDate, dayOffset);
  }

  changeFirstValueByKeyup(event: KeyboardEvent) {
    if (!this.preventKeys(event) || !this.preventDateChangingByKey(event)) return;
    const newDate = this.getDateFromKeyupEvent(event as any);
    if (this.validateInputDate((<HTMLTextAreaElement>event.target).value)) {
      const to = newDate > this.dateRangeChanged[1] ? newDate : this.dateRangeChanged[1];
      this.dateRangeValue = [newDate, to];
    }
    this.setValidationError();
  }

  changeSecondValueByKeyup(event: KeyboardEvent) {
    if (!this.preventKeys(event) || !this.preventDateChangingByKey(event)) return;
    const newDate = this.getDateFromKeyupEvent(event as any);
    if (this.validateInputDate((<HTMLTextAreaElement>event.target).value)) {
      const from = newDate < this.dateRangeChanged[0] ? newDate : this.dateRangeChanged[0];
      this.dateRangeValue = [from, newDate];
    }
    this.setValidationError();
  }

  preventKeys = (event: KeyboardEvent): boolean =>
    (/^\d+$/i.test(event.key) || event.key.includes('Arrow') ||
    ['Delete', 'Backspace', 'Home', 'End', 'Tab'].includes(event.key))

  preventDateChangingByKey = (event: KeyboardEvent) =>
    (/^\d+$/i.test(event.key) ||
    ['ArrowUp', 'ArrowDown', 'Delete', 'Tab'].includes(event.key))

  validateInputDate = (date: string) => {
    const parsedDate = parseFormattedDate(date, this.mask, this.delimiter);
    return (
      isDateValid(parsedDate) &&
      checkRangeMatching(parsedDate, '2000-01-01', '2050-01-01')
    );
  }

  isFormChanged = () =>
    this.isRelativeTouched ||
    this.dateRangeChanged.some((date, i) => !!diffDays(date, this.dateRangeInit[i]))

  onDatepickerValueChange([firstDate, secondDate]) {
    this.dateRangeChanged = [firstDate, secondDate];
    setTimeout(() => {
      this.setInputValues([firstDate, secondDate || '']);
      this.isUpdated = this.isFormChanged();
      this.calculateDayDifference();
    });
  }

  setInputValues([firstDate, secondDate]: Date[]): void {
    this.inputMaskFrom = correctInputMaskFrom(firstDate, this.mask, this.delimiter);
    this.inputMaskTo = correctInputMaskTo(secondDate, this.mask, this.delimiter);
    this.from = firstDate;
    this.to = secondDate;
  }

  changeRelative(isRelative: boolean) {
    this.isRelativeTouched = true;
    this.isRelative = isRelative;
    this.currentDate = new Date();
    this.isUpdated = this.isFormChanged();
  }

  handleTodaySelect() {
    const isPreventUtcConvertion = !!this.offsetTimezone;
    const todayFrom =
      toUtcDate(toLocalDate(removeTime(new Date()), isPreventUtcConvertion), isPreventUtcConvertion);
    const todayTo = toUtcDate(toLocalDate(new Date(), isPreventUtcConvertion), isPreventUtcConvertion);

    setTimeout(() => {
      this.dateRangeValue =
        !this.dateRangeChanged[1] && (this.dateRangeChanged[0].getTime() - todayFrom.getTime() === 0)
        ? [todayFrom, todayTo]
        : [todayFrom];
    });
  }

  changeInputHandler() {
    setTimeout(() => this.setValidationError());
  }

  blurInputHandler({ target }) {
    if (!this.validateInputDate(target.value)) {
      target.focus();
      target.select();
    }
  }

  setValidationError(): void {
    const firstInputValueString = this.firstInputDate.nativeElement.value;
    const secondInputValueString = this.secondInputDate.nativeElement.value;

    this.error = 'Valid';
    if (!this.validateInputDate(firstInputValueString)) this.error = 'StartInvalid';
    if (!this.validateInputDate(secondInputValueString)) this.error = 'EndInvalid';
  }

  calculateDayDifference() {
    const [changedDateFrom, changedDateTo] = this.dateRangeChanged;
    this.differenceInDays = diffDays(changedDateTo || changedDateFrom, changedDateFrom) + 1;
  }
}
