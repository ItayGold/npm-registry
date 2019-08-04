import {
  Component,
  Input,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
  HostBinding,
  EventEmitter,
  HostListener,
  ViewEncapsulation,
  OnChanges
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { validateDateMask } from '../helpers/w6-mask-helper';
import { ClickTimeDomainState, ClickTimeDomainTranslations } from '../models/click-time-domain-models';
import { format, toUtcDate, toLocalDate, diffDays, addDays } from '../helpers/w6-date-helper';
import { ClickTimeDomainModalComponent } from '../click-time-domain-modal/click-time-domain-modal.component';

const MODAL_DIALOG_CLASS = 'time-domain-modal-dialog';

/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/time-domain</example-url>
 */
@Component({
  selector: 'click-time-domain',
  templateUrl: './click-time-domain.component.html',
  styleUrls: ['./click-time-domain.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClickTimeDomainComponent implements OnChanges {

  public differenceInDays: number;
  private offsetDays: number;
  private isRelative: boolean;
  private bsModalRef: BsModalRef;
  private currentDate: Date;
  private dateRangeValue: Date[];
  private dateInputWidth: string;
  private offsetTimezone: number = 0;
  private daysFromCurrent: number = 0;

  private from: Date;
  get fromFormatted() { return format(this.from, this.mask); }

  private to: Date;
  get toFormatted() { return format(this.to, this.mask); }

  get modalWindow(): Element { return document.getElementsByClassName(MODAL_DIALOG_CLASS)[0]; }

  @Input() private customModalClass: string = '';
  @Input() calendarState: ClickTimeDomainState;
  @Input() translations: ClickTimeDomainTranslations = {
    Form_Save_Buttons: 'Save',
    Form_Cancel_Buttons: 'Cancel',
    CalendarForm_EndInvalid: 'Invalid end date',
    CalendarForm_StartInvalid: 'Invalid start date',
    CalendarForm_LoadDates_Day: 'Day',
    CalendarForm_LoadDates_Days: 'Days',
    CalendarForm_LoadDates_Count: 'Selected days',
    CalendarForm_Today_LinkButton: 'today',
    CalendarForm_AutoUpdate_CheckBoxLabel: 'Auto update',
    CalendarForm_AutoUpdate_CheckBoxTooltip: 'Tooltip autoupdate',
  };

  private _mask: string = validateDateMask(null);
  @Input('mask')
  get mask() { return this._mask; }
  set mask(value: string) { this._mask = validateDateMask(value); }

  @Output() datesSaved = new EventEmitter<ClickTimeDomainState>();
  @ViewChild('divider', { static: false }) divider: ElementRef;
  @ViewChild('datesWrapper', { static: false }) datesWrapper: ElementRef;
  @HostBinding('class') class = 'time-domain';

  constructor(private renderer: Renderer2, private modalService: BsModalService) {
    this.updateTimeDomainState();
  }

  ngOnChanges({ calendarState }: any) {
    if (calendarState) {
      const { isRelative, from, to, currentDate } = calendarState.currentValue;

      if (
        to && this.to !== to ||
        from && this.from !== from ||
        isRelative && this.isRelative !== isRelative ||
        currentDate && this.currentDate !== currentDate
      ) {
        this.updateTimeDomainState(calendarState.currentValue);
      }
    }
  }

  updateTimeDomainState(calendarState?: ClickTimeDomainState) {
    const today = toUtcDate(new Date());
    if (!calendarState) {
      this.dateRangeValue = [today, today];
    } else {
      this.offsetTimezone = diffDays(new Date(), toUtcDate(calendarState.currentDate));
      this.offsetDays = diffDays(today, toUtcDate(calendarState.currentDate));
      this.isRelative = calendarState.isRelative || false;
      this.currentDate = calendarState.currentDate || new Date();
      this.daysFromCurrent = calendarState.isRelative ? (this.offsetTimezone ? this.offsetTimezone : this.offsetDays) : 0;
      this.dateRangeValue = [
        addDays(toUtcDate(calendarState.from), this.daysFromCurrent),
        addDays(toUtcDate(calendarState.to), this.daysFromCurrent)
      ];
    }
    this.from = this.dateRangeValue[0];
    this.to = this.dateRangeValue[1];
    this.differenceInDays = diffDays(this.to, this.from) + 1;
  }

  showModal() {
    const initialState = {
      mask: this.mask,
      isRelative: this.isRelative,
      currentDate: this.currentDate,
      translations: this.translations,
      dateRangeValue: this.dateRangeValue,
      dateInputWidth: this.dateInputWidth,
      offsetTimezone: this.offsetTimezone,
    };
    this.bsModalRef = this.modalService.show(ClickTimeDomainModalComponent, { initialState, class: `${MODAL_DIALOG_CLASS} ${this.customModalClass}` });

    this.bsModalRef.content.closed.subscribe(() => {
      const { dateRangeChanged, isRelative, currentDate, isRelativeTouched } = this.bsModalRef.content;
      let from = dateRangeChanged[0];
      let to = dateRangeChanged[1];
      if (!isRelativeTouched || this.offsetTimezone) {
        from = addDays(dateRangeChanged[0], -this.daysFromCurrent);
        to = addDays(dateRangeChanged[1], -this.daysFromCurrent);

        if (this.offsetTimezone > 0 && !this.isRelative && isRelative) {
          from = toUtcDate(toUtcDate(from));
          to = toUtcDate(toUtcDate(to));
        }
        if (this.offsetTimezone > 0 && this.isRelative && !isRelative) {
          from = toLocalDate(toLocalDate(from));
          to = toLocalDate(toLocalDate(to));
        }

        if (this.offsetTimezone < 0 && !this.isRelative && isRelative) {
          from = toUtcDate(from);
          to = toUtcDate(to);
        }
        if (this.offsetTimezone < 0 && this.isRelative && !isRelative) {
          from = toLocalDate(from);
          to = toLocalDate(to);
        }
      }

      this.to = dateRangeChanged[1];
      this.from = dateRangeChanged[0];
      this.isRelative = isRelative;
      this.currentDate = currentDate;
      this.daysFromCurrent = 0;

      this.differenceInDays = diffDays(this.to, this.from) + 1;

      this.datesSaved.emit({
        isRelative,
        currentDate,
        to: toLocalDate(to),
        from: toLocalDate(from)
      });
    });

    this.adjustModalWindowOffset();
  }

  get dayCountLabel(): string {
    return this.differenceInDays > 1
      ? this.translations.CalendarForm_LoadDates_Days
      : this.translations.CalendarForm_LoadDates_Day;
  }

  @HostListener('window:resize')
  adjustModalWindowOffset(): void {
    if (this.modalWindow) {
      this.renderer.setStyle(this.modalWindow, 'left', this.calculateModalWindowOffsetX());
      this.renderer.setStyle(this.modalWindow, 'top', this.calculateModalWindowOffsetY());
    }
  }

  calculateModalWindowOffsetX(): string {
    const { x, width } = this.divider.nativeElement.getBoundingClientRect();
    return `${x + width / 2}px`;
  }

  calculateModalWindowOffsetY(): string {
    const { y } = this.datesWrapper.nativeElement.getBoundingClientRect();
    return `${y}px`;
  }
}
