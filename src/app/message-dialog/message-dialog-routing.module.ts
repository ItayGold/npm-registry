import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeseageDialogDemoComponent } from './message-dialog-demo/message-dialog-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MeseageDialogDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeseageDialogDemoRoutingModule { }
