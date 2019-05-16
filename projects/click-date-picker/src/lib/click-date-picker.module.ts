import { NgModule } from '@angular/core';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ClickDatePickerComponent } from './click-date-picker.component';

@NgModule({
  declarations: [ClickDatePickerComponent],
  imports: [DatepickerModule.forRoot(), BsDatepickerModule.forRoot()],
  exports: [ClickDatePickerComponent],
})
export class ClickDatePickerModule {}
