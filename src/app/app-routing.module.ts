import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DatePickerPageComponent } from './pages/date-picker-page/date-picker-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/date-picker', pathMatch: 'full' },
  {
    path: 'date-picker',
    loadChildren: './demo/date-picker/date-picker.module#DatePickerModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
