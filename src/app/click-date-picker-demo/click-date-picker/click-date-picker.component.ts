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
} from 'ngx-bootstrap/datepicker';

export interface Message {
  type: string;
  val: any;
  data?: any;
}

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
  @ViewChild('dp') datepicker: BsDaterangepickerDirective;
  @Input() showWeekNumbers: boolean;
  @Input() isOpen: boolean;
  datePickerConfig: Partial<BsDatepickerConfig>;
  previousDate: Date = new Date(null);
  moduleStrings: any = {};

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.datePickerConfig = Object.assign(
      {},
      { showWeekNumbers: this.showWeekNumbers }
    );
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
