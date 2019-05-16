import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DemoDatePickerComponent } from './demo-date-picker.component';
import { ClickDatePickerModule } from '@click/date-picker';

@NgModule({
  declarations: [DemoDatePickerComponent],
  imports: [
    CommonModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ClickDatePickerModule,
  ],
})
export class DatePickerModule {}
