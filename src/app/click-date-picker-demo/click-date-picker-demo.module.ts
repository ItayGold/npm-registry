import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ClickDatePickerRoutingModule } from './click-date-picker-routing.module';
import { ClickDatePickerModule } from '@click/date-picker';
import { ClickDatePickerDemoComponent } from './click-date-picker-demo/click-date-picker-demo.component';

@NgModule({
  declarations: [ClickDatePickerDemoComponent],
  imports: [
    CommonModule,
    ClickDatePickerRoutingModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ClickDatePickerModule,
  ],
})
export class ClickDatePickerDemoModule {}
