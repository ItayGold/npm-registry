import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickTimeDomainComponent } from './click-time-domain/click-time-domain.component';

const routes: Routes = [
  {
    path: '',
    component: ClickTimeDomainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickTimeDomainRoutingModule { }
