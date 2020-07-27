import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickIconDemoRoutingModule } from './click-icon-demo-routing.module';
import { ClickIconDemoComponent } from './click-icon-demo/click-icon-demo.component';
import { ClickIconComponent } from './click-icon/click-icon.component';

@NgModule({
  declarations: [ClickIconComponent, ClickIconDemoComponent],
  imports: [
    CommonModule,
    ClickIconDemoRoutingModule,
  ],
  exports: [ClickIconComponent, ClickIconDemoComponent]
})
export class ClickIconDemoModule { }
