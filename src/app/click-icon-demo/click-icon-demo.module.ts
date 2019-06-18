import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickIconDemoRoutingModule } from './click-icon-demo-routing.module';
import { ClickIconComponent } from './click-icon/click-icon.component';
import { ClickIconDemoComponent } from './click-icon-demo/click-icon-demo.component';

@NgModule({
  declarations: [ClickIconDemoComponent, ClickIconComponent],
  imports: [
    CommonModule,
    ClickIconDemoRoutingModule,
  ]
})
export class ClickIconDemoModule { }
