import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickMeseageDialogDemoComponent } from './click-message-dialog-demo/click-message-dialog-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickMeseageDialogDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeseageDialogDemoRoutingModule { }
