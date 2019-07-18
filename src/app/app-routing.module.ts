import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'date-picker',
    loadChildren: () => import('./click-date-picker-demo/click-date-picker-demo.module')
      .then(mod => mod.ClickDatePickerDemoModule)
  },
  {
    path: 'date-picker-range',
    loadChildren: () => import('./click-date-picker-range-demo/click-date-picker-range-demo.module')
      .then(mod => mod.ClickDatePickerRangeDemoModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./click-icon-demo/click-icon-demo.module')
      .then(mod => mod.ClickIconDemoModule)
  },
  {
    path: 'tristate-checkbox',
    loadChildren: () => import('./click-tristate-checkbox/click-tristate-checkbox.module')
      .then(mod => mod.ClickTristateCheckboxModule)
  },
  {
    path: 'search-input',
    loadChildren: () => import('./click-search-input/click-search-input.module')
      .then(mod => mod.ClickSearchInputModule)
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
