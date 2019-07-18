import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickSearchInputComponent } from './click-search-input/click-search-input.component';
import { ClickSearchInputDemoComponent } from './click-search-input-demo/click-search-input-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickSearchInputDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickSearchInputRoutingModule { }
