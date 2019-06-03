import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickDatePickerDemoComponent } from './click-datepicker-range-demo/click-date-picker-demo/click-date-picker-demo.component';
import { ClickDatepickerRangeDemoComponent } from './click-datepicker-range-demo/click-datepicker-range-demo.component';
import { ClickDatepickerRangeComponent } from './click-datepicker-range-demo/click-datepicker-range/click-datepicker-range.component';

@NgModule({
  declarations: [AppComponent, ClickDatePickerDemoComponent, ClickDatepickerRangeDemoComponent, ClickDatepickerRangeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
