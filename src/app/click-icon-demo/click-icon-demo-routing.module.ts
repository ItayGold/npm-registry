import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickIconDemoComponent } from './click-icon-demo/click-icon-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickIconDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickIconDemoRoutingModule { }
