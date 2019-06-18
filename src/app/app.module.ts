import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickDatePickerComponent } from './click-date-picker-demo/click-date-picker/click-date-picker.component';
import { ClickDatepickerRangeComponent } from './click-date-picker-range-demo/click-date-picker-range/click-date-picker-range.component';

@NgModule({
  declarations: [AppComponent, ClickDatePickerComponent, ClickDatepickerRangeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
