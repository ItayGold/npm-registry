import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickTreeViewDemoComponent } from './click-tree-view-demo/click-tree-view-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickTreeViewDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickTreeViewRoutingModule { }
