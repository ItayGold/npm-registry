import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerRoutingModule } from './date-picker-routing.module';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
})
export class DatePickerModule {}