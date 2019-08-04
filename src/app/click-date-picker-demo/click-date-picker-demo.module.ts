import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ClickIconDemoModule } from '../click-icon-demo/click-icon-demo.module';
import { ClickDatePickerRoutingModule } from './click-date-picker-routing.module';
import { ClickDatePickerComponent } from './click-date-picker/click-date-picker.component';
import { ClickDatePickerDemoComponent } from './click-date-picker-demo/click-date-picker-demo.component';

@NgModule({
  declarations: [ClickDatePickerComponent, ClickDatePickerDemoComponent],
  imports: [
    CommonModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ClickDatePickerRoutingModule,
    ClickIconDemoModule
  ],
})
export class ClickDatePickerDemoModule { }
