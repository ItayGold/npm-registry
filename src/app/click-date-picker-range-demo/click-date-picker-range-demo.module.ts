import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickDatePickerRangeDemoRoutingModule } from './click-date-picker-range-demo-routing.module';
import { ClickDatePickerRangeDemoComponent } from './click-date-picker-range-demo/click-date-picker-range-demo.component';
import { ClickDatePickerModule } from '@click/date-picker';

@NgModule({
  declarations: [ClickDatePickerRangeDemoComponent],
  imports: [
    CommonModule,
    ClickDatePickerRangeDemoRoutingModule,
    ClickDatePickerModule
  ]
})
export class ClickDatePickerRangeDemoModule { }
