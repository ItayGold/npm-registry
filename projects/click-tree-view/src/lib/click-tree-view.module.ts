import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickTreeViewComponent } from './click-tree-view.component';
import { ClickTreeNodeComponent } from './click-tree-node.component';
import { ClickSearchInputModule } from '@click/search-input';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ClickTristateCheckboxModule } from '@click/tristate-checkbox';

@NgModule({
  imports: [
    CommonModule,
    ClickSearchInputModule,
    PerfectScrollbarModule,
    ClickTristateCheckboxModule,
  ],
  declarations: [
    ClickTreeNodeComponent,
    ClickTreeViewComponent,
  ],
  exports: [
    ClickTreeViewComponent,
  ]
})
export class ClickTreeViewModule { }
