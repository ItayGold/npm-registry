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
    path: 'message-dialog',
    loadChildren: () => import('./message-dialog/message-dialog.module')
      .then(mod => mod.MeseageDialogDemoModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./click-icon-demo/click-icon-demo.module')
      .then(mod => mod.ClickIconDemoModule)
  },
  {
    path: 'search-input',
    loadChildren: () => import('./click-search-input/click-search-input.module')
      .then(mod => mod.ClickSearchInputModule)
  },
  {
    path: 'tristate-checkbox',
    loadChildren: () => import('./click-tristate-checkbox/click-tristate-checkbox.module')
      .then(mod => mod.ClickTristateCheckboxModule)
  },
  {
    path: 'tree-view',
    loadChildren: () => import('./click-tree-view/click-tree-view.module')
      .then(mod => mod.ClickTreeViewModule)
  },
  {
    path: 'time-domain',
    loadChildren: () => import('./click-time-domain/click-time-domain.module')
      .then(mod => mod.ClickTimeDomainModule)
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
