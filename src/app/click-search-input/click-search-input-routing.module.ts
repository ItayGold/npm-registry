import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickSearchInputComponent } from './click-search-input/click-search-input.component';

const routes: Routes = [
  {
    path: '',
    component: ClickSearchInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickSearchInputRoutingModule { }
