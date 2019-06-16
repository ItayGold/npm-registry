import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickDatePickerRoutingModule } from './click-date-picker-routing.module';
import { ClickDatePickerModule } from '@click/date-picker';
import { ClickIconModule } from '@click/icon';
import { ClickDatePickerDemoComponent } from './click-date-picker-demo/click-date-picker-demo.component';

@NgModule({
  declarations: [ClickDatePickerDemoComponent],
  imports: [
    CommonModule,
    ClickDatePickerRoutingModule,
    ClickIconModule,
    ClickDatePickerModule
  ],
})
export class ClickDatePickerDemoModule { }
