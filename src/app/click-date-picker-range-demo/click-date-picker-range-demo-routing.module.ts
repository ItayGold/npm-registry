import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickDatePickerRangeDemoComponent } from './click-date-picker-range-demo/click-date-picker-range-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickDatePickerRangeDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickDatePickerRangeDemoRoutingModule { }
