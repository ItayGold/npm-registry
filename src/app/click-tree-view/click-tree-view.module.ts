import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickSearchInputModule } from '@click/search-input';
import { ClickTristateCheckboxModule } from '@click/tristate-checkbox';

import { ClickTreeViewComponent } from './click-tree-view/click-tree-view.component';
import { ClickTreeNodeComponent } from './click-tree-node/click-tree-node.component';
import { ClickTreeViewRoutingModule } from './click-tree-view-routing.module';
import { ClickTreeViewDemoComponent } from './click-tree-view-demo/click-tree-view-demo.component';

@NgModule({
  declarations: [
    ClickTreeViewComponent,
    ClickTreeNodeComponent,
    ClickTreeViewDemoComponent,
  ],
  imports: [
    CommonModule,
    ClickTreeViewRoutingModule,
    ClickSearchInputModule,
    ClickTristateCheckboxModule,
  ],
  exports: [
    ClickTreeViewComponent,
  ]
})
export class ClickTreeViewModule {}
