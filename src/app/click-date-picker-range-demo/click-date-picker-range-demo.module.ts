import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ClickDatePickerRangeDemoRoutingModule } from './click-date-picker-range-demo-routing.module';
import { ClickDatePickerRangeDemoComponent } from './click-date-picker-range-demo/click-date-picker-range-demo.component';
import { ClickDatepickerRangeComponent } from './click-date-picker-range/click-date-picker-range.component';

@NgModule({
  declarations: [ClickDatepickerRangeComponent, ClickDatePickerRangeDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ClickDatePickerRangeDemoRoutingModule
  ]
})
export class ClickDatePickerRangeDemoModule { }
