import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ClickDatePickerRangeDemoRoutingModule } from './click-date-picker-range-demo-routing.module';
import { ClickDatePickerRangeDemoComponent } from './click-date-picker-range-demo/click-date-picker-range-demo.component';
// import { ClickDatepickerRangeComponent } from './click-date-picker-range/click-date-picker-range.component';
import { ClickDatePickerModule } from '@click/date-picker';

@NgModule({
  declarations: [ClickDatePickerRangeDemoComponent],
  imports: [
    CommonModule,
    ClickDatePickerRangeDemoRoutingModule,
    FormsModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ClickDatePickerModule
  ]
})
export class ClickDatePickerRangeDemoModule { }
