import { Component, Input, Output, ViewChild, ElementRef, Renderer2, HostBinding, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { validateDateMask } from '../helpers/w6-mask-helper';
import { format, toUtcDate, toLocalDate, diffDays, addDays } from '../helpers/w6-date-helper';
import { ClickTimeDomainModalComponent } from '../click-time-domain-modal/click-time-domain-modal.component';


@Component({
  selector: 'click-time-domain',
  templateUrl: './click-time-domain.component.html',
  styleUrls: ['./click-time-domain.component.scss']
})
export class ClickTimeDomainComponent {

  mask = 'DD/MM/YYYY';
  daysFromCurrent;
  differenceInDays;
  dateRangeValue;
  offsetDays;
  offsetTimezone;
  isRelative;
  currentDate;
  dateInputWidth;
  bsModalRef: BsModalRef;

  @Input() calendar;
  @Output() datesChanged = new EventEmitter();
  @HostBinding('class') class = 'main-header-col align-items-center justify-content-center time-domain-selection';

  from: Date;
  get fromFormatted() {
    return format(this.from, this.mask); // Do not set any calculation here
  }

  to: Date;
  get toFormatted() {
    return format(this.to, this.mask); // Do not set any calculation here
  }

  get modalWindow(): Element {
    return document.getElementsByClassName('time-domain-modal-dialog')[0];
  }

  @ViewChild('divider') divider: ElementRef;
  @ViewChild('datesWrapper') datesWrapper: ElementRef;

  constructor(
    private renderer: Renderer2,
    private modalService: BsModalService,
  ) {
    const today = toUtcDate(new Date());
    if (!this.calendar) {
      this.dateRangeValue = [today, today];
    } else {
      this.offsetTimezone = diffDays(new Date(), toUtcDate(this.calendar.currentDate));
      this.offsetDays = diffDays(today, toUtcDate(this.calendar.currentDate));
      this.isRelative = this.calendar.isRelative;
      this.currentDate = this.calendar.currentDate;
      this.daysFromCurrent = this.calendar.isRelative ? (this.offsetTimezone ? this.offsetTimezone : this.offsetDays) : 0;
      this.dateRangeValue = [
        addDays(toUtcDate(this.calendar.from), this.daysFromCurrent),
        addDays(toUtcDate(this.calendar.to), this.daysFromCurrent)
      ];
    }
    this.from = this.dateRangeValue[0];
    this.to = this.dateRangeValue[1];
    this.differenceInDays = diffDays(this.to, this.from) + 1;
  }

  showModal() {
    const initialState = {
      dateRangeValue: this.dateRangeValue,
      isRelative: this.isRelative,
      dateInputWidth: this.dateInputWidth,
      mask: this.mask,
      currentDate: this.currentDate,
      offsetTimezone: this.offsetTimezone,
    };
    this.bsModalRef = this.modalService.show(ClickTimeDomainModalComponent, { initialState, class: 'time-e vtyz-modal-dialog' });

    this.bsModalRef.content.onClose.subscribe(() => {
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

      this.datesChanged.emit({
        isRelative,
        currentDate,
        to: toLocalDate(to),
        from: toLocalDate(from)
      });
    });

    this.adjustModalWindowOffset();
  }

  adjustModalWindowOffset() {
    if (this.modalWindow) {
      this.renderer.setStyle(this.modalWindow, 'left', this.calculateModalWindowOffsetX());
      this.renderer.setStyle(this.modalWindow, 'top', this.calculateModalWindowOffsetY());
    }
  }

  calculateModalWindowOffsetX(): string {
    const dividerEl = this.divider.nativeElement.getBoundingClientRect();
    return `${dividerEl.x + (dividerEl.width / 2)}px`;
  }

  calculateModalWindowOffsetY(): string {
    const datesWrapper = this.datesWrapper.nativeElement.getBoundingClientRect();
    return `${datesWrapper.y}px`;
  }
}
