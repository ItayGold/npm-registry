import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { DatePickerComponent } from './date-picker.component';
import { DemoDatePickerComponent } from './demo-date-picker.component';
import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerComponent } from '@click/date-picker';

@NgModule({
  declarations: [DatePickerComponent, DemoDatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
})
export class DatePickerModule {}
