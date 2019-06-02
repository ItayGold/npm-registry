import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ClickDatePickerComponent } from './click-date-picker/click-date-picker.component';
import { ClickDatepickerRangeComponent } from './click-datepicker-range/click-datepicker-range.component';

@NgModule({
  declarations: [ClickDatePickerComponent, ClickDatepickerRangeComponent],
  imports: [FormsModule, ReactiveFormsModule, DatepickerModule.forRoot(), BsDatepickerModule.forRoot()],
  exports: [ClickDatePickerComponent, ClickDatepickerRangeComponent],
})
export class ClickDatePickerModule { }
