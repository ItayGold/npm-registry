import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig, BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';
import { ClickTimeDomainTranslations } from '../models/click-time-domain-models';

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
  template: `
    <div class="modal-body" (document:keydown.enter)="closeModalWithEnter()">
      <div class="calendar">
        <div class="calendar-header">
          <div class="calendar-autoupdate">
            <div class="checkbox">
              <click-tristate-checkbox
                [value]="isRelative"
                (valueChanged)="changeRelative($event)"
                [checkboxLabel]="translations.CalendarForm_AutoUpdate_CheckBoxLabel">
              </click-tristate-checkbox>
            </div>
            <span class="tooltip-trigger d-flex align-items-center">
              <span class="calendar-tip icon icon-info"
                    [tooltip]="translations.CalendarForm_AutoUpdate_CheckBoxTooltip"
                    placement="top"
                    container="body">
              </span>
            </span>
          </div>
          <div class="calendar-inputs">
            <div class="form-field" [ngClass]="{'has-error': error === 'StartInvalid' }">
              <input
                #firstInputDate
                class="form-control input-date input-date-from"
                (keydown)="preventKeys($event)"
                (keyup)="changeFirstValueByKeyup($event)"
                (blur)="blurInputHandler($event)"
                [style.width]="dateInputWidth"
                [ngModel]="fromFormatted"
                (ngModelChange)="changeInputHandler()"
                [mask]="inputMaskFrom"
                [showMaskTyped]="true"
                [dropSpecialCharacters]="false"
                type="text">
            </div>
            <div class="form-field" [ngClass]="{'has-error': error === 'EndInvalid' }">
              <input
                #secondInputDate
                class="form-control input-date"
                [style.width]="dateInputWidth"
                [ngModel]="toFormatted"
                (ngModelChange)="changeInputHandler()"
                (keydown)="preventKeys($event)"
                (keyup)="changeSecondValueByKeyup($event)"
                (blur)="blurInputHandler($event)"
                [mask]="inputMaskTo"
                [showMaskTyped]="true"
                [dropSpecialCharacters]="false"
                type="text">
            </div>
          </div>
          <span class="calendar-summary">{{ translations.CalendarForm_LoadDates_Count }} ({{ differenceInDays }} {{ dayCountLabel }})</span>
        </div>
        <click-date-range-calendar [value]="dateRangeValue" (valueChanged)="onDatepickerValueChange($event)"></click-date-range-calendar>
      </div>
      <div class="modal-controls d-flex justify-content-between align-items-center">
        <span role="button" class="link" (click)="handleTodaySelect()">{{ translations.CalendarForm_Today_LinkButton }}</span>
        <div class="d-flex justify-content-between align-items-center">
          <span class="modal-error" *ngIf="error !== 'Valid'">{{ translations[errorTranslationName] }}</span>
          <button 
            (click)="confirm()"
            [disabled]="!isUpdated || error !== 'Valid'"
            type="button" 
            class="btn btn-primary">{{ translations.Form_Save_Buttons }}</button>
          <button type="button" class="btn btn-default" (click)="decline()">{{ translations.Form_Cancel_Buttons }}</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal {
      display: flex !important;
      align-items: center;
      cursor: pointer;
      transform: translate3d(0, 0, 0) !important;
    }
    .modal-content {
      height: auto !important;
      width: auto !important;
      border-width: 1px;
    }
    .form .modal-content {
      flex: 1 1 auto;
      min-height: 0%;
    }
    .modal-dialog {
      cursor: default;
      flex: 0 0 auto;
      max-width: 100% !important;
    }
    .modal-dialog.modal-sm {
      width: 375px;
    }
  `],
  providers: [{
    provide: BsDatepickerConfig,
    useClass: BsDaterangepickerConfig
  }],
  encapsulation: ViewEncapsulation.None
})
export class ClickTimeDomainModalComponent implements OnInit {

  Errors = Errors;
  error: string = 'Valid';

  to: Date;
  from: Date;
  mask: string;
  currentDate: Date;
  dateRangeInit: Date[];
  dateRangeValue: Date[];
  dateRangeChanged: Date[];
  dateInputWidth: string;
  differenceInDays: number;
  offsetTimezone: number;
  isUpdated: boolean = false;
  isRelative: boolean;
  isRelativeTouched: boolean = false;
  delimiter: string;
  inputMaskTo: string;
  inputMaskFrom: string;
  translations: ClickTimeDomainTranslations;

  @Output() closed: EventEmitter<void> = new EventEmitter();

  @ViewChild('firstInputDate', { static: false }) firstInputDate: ElementRef;
  @ViewChild('secondInputDate', { static: false }) secondInputDate: ElementRef;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.delimiter = revealDelimiter(this.mask);
    this.dateRangeInit = [...this.dateRangeValue];
    this.dateRangeChanged = [...this.dateRangeValue];
    this.setInputValues(this.dateRangeValue);
  }

  confirm(): void {
    if (!this.isUpdated || this.error !== 'Valid') return;

    this.closed.emit();
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  closeModalWithEnter(): void {
    this.confirm();
  }

  get fromFormatted(): string {
    return format(this.from, this.mask);
  }

  get toFormatted(): string {
    return format(this.to, this.mask);
  }

  get dayCountLabel(): string {
    return this.differenceInDays > 1
      ? this.translations.CalendarForm_LoadDates_Days
      : this.translations.CalendarForm_LoadDates_Day;
  }

  get errorTranslationName(): string {
    return `CalendarForm_${this.error}`;
  }

  getDateFromKeyupEvent({ target: { value }, key }): Date {
    const dayOffset =
      (key === 'ArrowUp') ? 1 :
        (key === 'ArrowDown') ? -1 : 0;
    const parsedDate = parseFormattedDate(value, this.mask, this.delimiter);
    return addDays(parsedDate, dayOffset);
  }

  changeFirstValueByKeyup(event: KeyboardEvent): void {
    if (!this.preventKeys(event) || !this.preventDateChangingByKey(event)) return;
    const newDate = this.getDateFromKeyupEvent(event as any);
    if (this.validateInputDate((<HTMLTextAreaElement>event.target).value)) {
      const to = newDate > this.dateRangeChanged[1] ? newDate : this.dateRangeChanged[1];
      this.dateRangeValue = [newDate, to];
    }
    this.setValidationError();
  }

  changeSecondValueByKeyup(event: KeyboardEvent): void {
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

  preventDateChangingByKey = (event: KeyboardEvent): boolean =>
    (/^\d+$/i.test(event.key) ||
      ['ArrowUp', 'ArrowDown', 'Delete', 'Tab'].includes(event.key))

  validateInputDate = (date: string): boolean => {
    const parsedDate = parseFormattedDate(date, this.mask, this.delimiter);
    return (
      isDateValid(parsedDate) &&
      checkRangeMatching(parsedDate, '2000-01-01', '2050-01-01')
    );
  }

  isFormChanged = (): boolean =>
    this.isRelativeTouched ||
    this.dateRangeChanged.some((date, i) => !!diffDays(date, this.dateRangeInit[i]))

  onDatepickerValueChange([firstDate, secondDate]): void {
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

  changeRelative(isRelative: boolean): void {
    this.isRelativeTouched = true;
    this.isRelative = isRelative;
    this.currentDate = new Date();
    this.isUpdated = this.isFormChanged();
  }

  handleTodaySelect(): void {
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

  changeInputHandler(): void {
    setTimeout(() => this.setValidationError());
  }

  blurInputHandler({ target }): void {
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

  calculateDayDifference(): void {
    const [changedDateFrom, changedDateTo] = this.dateRangeChanged;
    this.differenceInDays = diffDays(changedDateTo || changedDateFrom, changedDateFrom) + 1;
  }
}
