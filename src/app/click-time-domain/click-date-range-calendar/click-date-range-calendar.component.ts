import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
    EventEmitter,
    Output,
    Input,
    OnChanges,
    SimpleChanges
  } from '@angular/core';
  import { BsDatepickerConfig, BsDaterangepickerConfig } from 'ngx-bootstrap';
  import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
  import { filter, map } from 'rxjs/operators';
  
  export const configFactory = (config: BsDaterangepickerConfig) => ({
    ...config,
    containerClass: 'theme-dark-blue',
    customTodayClass: 'today',
  });

@Component({
  selector: 'click-date-range-calendar',
  templateUrl: './click-date-range-calendar.component.html',
  styleUrls: ['./click-date-range-calendar.component.scss'],
  providers: [{
    provide: BsDatepickerConfig,
    useFactory: configFactory,
    deps: [BsDaterangepickerConfig]
  }],
})
export class ClickDateRangeCalendarComponent implements OnInit, AfterViewInit, OnChanges {
    private valueSubject = new BehaviorSubject<Date[]>(null);
    private isDatePickerInitializedSubject = new BehaviorSubject<boolean>(false);
  
    private value$ = this.valueSubject.asObservable();
    private isDatePickerInitialized$ = this.isDatePickerInitializedSubject.asObservable();
  
    @ViewChild('datepicker') datePicker: any;
    @Output() valueChanged: EventEmitter<Date[]> = new EventEmitter<Date[]>();
    @Input() value: Date[];
  
    constructor() {}
  
    ngOnInit() {}
  
    ngAfterViewInit(): void {
      this.isDatePickerInitializedSubject.next(true);
      combineLatest(this.isDatePickerInitialized$, this.value$)
        .pipe(
          filter(
            ([isDatePickerInitialized, value]) =>
              isDatePickerInitialized && !!value
          ),
          map(([isDatePickerInitialized, value]) => value)
        )
        .subscribe((value: Date[]) => {
          setTimeout(() => {
            this.datePicker._rangeStack = [...value];
            this.datePicker.value = [...value];
  
            if (this.datePicker._rangeStack.length === 2) {
              this.datePicker._rangeStack = [];
            }
          });
        });
      this.datePicker.valueChange.subscribe(x => this.valueChanged.next(x));
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      const { value } = changes;
      if (value) {
        this.valueSubject.next(value.currentValue);
      }
    }
  
  }