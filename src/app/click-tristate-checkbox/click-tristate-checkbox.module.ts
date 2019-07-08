import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickTristateCheckboxRoutingModule } from './click-tristate-checkbox-routing.module';
import { ClickTristateCheckboxComponent } from './click-tristate-checkbox/click-tristate-checkbox.component';
import { ClickTristateCheckboxDemoComponent } from './click-tristate-checkbox-demo/click-tristate-checkbox-demo.component';

@NgModule({
  declarations: [
    ClickTristateCheckboxComponent,
    ClickTristateCheckboxDemoComponent,
  ],
  imports: [
    CommonModule,
    ClickTristateCheckboxRoutingModule,
  ],
  exports: [
    ClickTristateCheckboxComponent,
  ]
})
export class ClickTristateCheckboxModule { }
