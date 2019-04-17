import { NgModule } from '@angular/core';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [DatepickerModule.forRoot(), BsDatepickerModule.forRoot()],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}
