import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'click-date-picker',
  template: `
    <div>
      <div>
        <span
          ><i
            role="button"
            [id]="['123']"
            class="calendar-icon fa fa-calendar"
            (click)="click()"
            (keypress)="click()"
          ></i
        ></span>
      </div>

      <input
        type="text"
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
export class DatePickerComponent implements OnInit {
  @Input() selectedDate: Date;
  @Input() todayDate: Date = new Date();
  @Input() todayButtonText: string;
  @Output() setDateEvent = new EventEmitter<string>();
  @ViewChild('dp') datepicker: BsDaterangepickerDirective;

  previousDate: Date = new Date(null);
  datePickerConfig: Partial<BsDatepickerConfig>;
  moduleStrings: any = {};

  constructor(private cdRef: ChangeDetectorRef) {
    this.datePickerConfig = Object.assign({}, { showWeekNumbers: false });
  }

  ngOnInit() {}

  public click() {
    this.datepicker.isOpen = !this.datepicker.isOpen;
  }

  /**
   * addDatePickerUIChanges
   */
  public addDatePickerUIChanges = function() {
    this.addUIChanges();
    const itemClicked = Array.from(
      document.querySelectorAll('.next , .previous, .current')
    );
    itemClicked.forEach(e => {
      e.addEventListener('click', () => {
        this.addDatePickerUIChanges();
      });
    });
  };

  private addUIChanges() {
    const divNode = document.createElement('div');
    divNode.classList.add('dpButtons');
    const bottunNode = document.createElement('div');
    const textnode = document.createTextNode(this.todayButtonText);
    bottunNode.addEventListener('click', () => {
      this.setToday();
    });
    bottunNode.classList.add('todayButton');
    bottunNode.appendChild(textnode);

    document.querySelector('bs-calendar-layout').appendChild(bottunNode);
  }

  private setToday() {
    this.selectedDate = this.todayDate;
    this.cdRef.detectChanges();
  }

  public dateChange(dt: Date): void {
    this.selectedDate = dt;
    this.setDateEvent.emit(dt.toString());
    // value.setHours(0, 0, 0, 0);
    // if (value.getTime() !== this.previousDate.getTime()) {
    //   this.previousDate = value;
    //   if (this.datepicker.isOpen) {
    //     this.setDateEvent.emit(value.toString());
    //   }
    // }
  }
}
