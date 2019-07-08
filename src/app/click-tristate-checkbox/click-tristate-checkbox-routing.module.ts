import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickTristateCheckboxDemoComponent } from './click-tristate-checkbox-demo/click-tristate-checkbox-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickTristateCheckboxDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickTristateCheckboxRoutingModule {}
