import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickSearchInputRoutingModule } from './click-search-input-routing.module';
import { ClickSearchInputComponent } from './click-search-input/click-search-input.component';

@NgModule({
  declarations: [
    ClickSearchInputComponent
  ],
  imports: [
    CommonModule,
    ClickSearchInputRoutingModule,
  ],
  exports: [
    ClickSearchInputComponent,
  ],
})
export class ClickSearchInputModule { }
