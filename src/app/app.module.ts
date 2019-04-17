import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatePickerModule } from '@click/date-picker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DatePickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
