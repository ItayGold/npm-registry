import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DemoDatePickerComponent } from './demo-date-picker.component';
import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerModule } from '@click/date-picker';

@NgModule({
  declarations: [DemoDatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatePickerModule,
  ],
})
export class DatePickerModule {}
