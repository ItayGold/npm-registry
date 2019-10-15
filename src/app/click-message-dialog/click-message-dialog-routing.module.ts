import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickMessageDialogDemoComponent } from './click-message-dialog-demo/click-message-dialog-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickMessageDialogDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickMessageDialogDemoRoutingModule {}
