import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoDatePickerComponent } from './demo-date-picker.component';

const routes: Routes = [
  {
    path: '',
    component: DemoDatePickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatePickerRoutingModule {}
