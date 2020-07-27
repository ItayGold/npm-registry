import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickDatePickerDemoComponent } from './click-date-picker-demo/click-date-picker-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickDatePickerDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickDatePickerRoutingModule { }
