import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickTreeViewRoutingModule } from './click-tree-view-routing.module';
import { ClickTreeViewComponent } from './click-tree-view/click-tree-view.component';
import { ClickTreeNodeComponent } from './click-tree-node/click-tree-node.component';
import { ClickTreeViewDemoComponent } from './click-tree-view-demo/click-tree-view-demo.component';
import { ClickSearchInputComponent } from '../click-search-input/click-search-input/click-search-input.component';
import { ClickTristateCheckboxComponent } from '../click-tristate-checkbox/click-tristate-checkbox/click-tristate-checkbox.component';

@NgModule({
  declarations: [
    ClickTreeViewComponent,
    ClickTreeNodeComponent,
    ClickSearchInputComponent,
    ClickTreeViewDemoComponent,
    ClickTristateCheckboxComponent,
  ],
  imports: [
    CommonModule,
    ClickTreeViewRoutingModule,
  ],
  exports: [
    ClickTreeViewComponent,
  ]
})
export class ClickTreeViewModule {}
