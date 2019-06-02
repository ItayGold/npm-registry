import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'date-picker',
    loadChildren: () => import('./click-date-picker-demo/click-date-picker-demo.module')
      .then(mod => mod.ClickDatePickerDemoModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./click-icon-demo/click-icon-demo.module')
      .then(mod => mod.ClickIconDemoModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
