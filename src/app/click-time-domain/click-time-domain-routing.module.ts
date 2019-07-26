import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickTimeDomainDemoComponent } from './click-time-domain-demo/click-time-domain-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ClickTimeDomainDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickTimeDomainRoutingModule { }
