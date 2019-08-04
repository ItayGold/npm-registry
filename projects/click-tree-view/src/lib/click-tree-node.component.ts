import { Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ClickTristateCheckboxState as CheckboxState } from '@click/tristate-checkbox';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { ClickTreeNode, ClickKeyNode, ClickTreeViewTranslations } from '../models';
import { ClickTreeViewService } from './click-tree-view.service';

@Component({
  selector: 'click-tree-node',
  template: `
    <li *ngIf="node.isVisible" class="tree-item" [ngClass]="getNodeStateClass()">
      <div class="tree-item-body">
        <span class="tree-item-arrow" (click)="onNodeClick($event, node)"></span>
        <click-tristate-checkbox [value]='node.checkState' (valueChanged)="onChecked($event, node)"></click-tristate-checkbox>
        <span class="tree-item-label" [innerHTML]="getLabelWithAmount()" (click)="onNodeClick($event, node)"></span>
      </div>
      <ul
        *ngIf="hasChildren()"
        class="tree-list has-sublist"
        [class.is-visible]="node.isExpanded"
        [class.is-hidden]="!node.isExpanded"
      >
        <click-tree-node
          *ngFor="let key of keyNode.children"
          [nodes]="nodes"
          [keyNode]="key"
          [translations]="translations"
          (changed)="onSubNodeChanged($event)"
        ></click-tree-node>
      </ul>
    </li>
  `,
  styles: [`
    :host ::ng-deep .highlighted {
      padding: 1px;
      background-color: #fff5d5;
    }
    .tree-list.has-sublist {
      list-style: none;
      padding: 0;
      margin: 0;
      padding-left: 27px;
    }
    .tree-list.is-visible {
      display: block;
    }
    .tree-list.is-hidden {
      display: none;
    }
    .tree-list.is-root > .tree-item-node > .tree-item.is-expanded {
      padding-bottom: 8px;
    }
    .tree-item-body {
      display: flex;
      padding: 5px 0;
    }
    .tree-item-label {
      margin-left: 9px;
      font-size: 14px;
      white-space: nowrap;
      cursor: pointer;
    }
    click-tristate-checkbox ~ .tree-item-label {
      margin-left: 9px;
    }
    .tree-item-arrow {
      display: flex;
      align-items: center;
      height: 16px;
      width: 10px;
      flex: 0 0 auto;
      margin-right: 10px;
      color: #808080;
      cursor: pointer;
      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTIgNDkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTIgNDkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTk4LjYwOCwyNDYuMTA0TDM4Mi42NjQsNjIuMDRjNS4wNjgtNS4wNTYsNy44NTYtMTEuODE2LDcuODU2LTE5LjAyNGMwLTcuMjEyLTIuNzg4LTEzLjk2OC03Ljg1Ni0xOS4wMzJsLTE2LjEyOC0xNi4xMiAgICBDMzYxLjQ3NiwyLjc5MiwzNTQuNzEyLDAsMzQ3LjUwNCwwcy0xMy45NjQsMi43OTItMTkuMDI4LDcuODY0TDEwOS4zMjgsMjI3LjAwOGMtNS4wODQsNS4wOC03Ljg2OCwxMS44NjgtNy44NDgsMTkuMDg0ICAgIGMtMC4wMiw3LjI0OCwyLjc2LDE0LjAyOCw3Ljg0OCwxOS4xMTJsMjE4Ljk0NCwyMTguOTMyYzUuMDY0LDUuMDcyLDExLjgyLDcuODY0LDE5LjAzMiw3Ljg2NGM3LjIwOCwwLDEzLjk2NC0yLjc5MiwxOS4wMzItNy44NjQgICAgbDE2LjEyNC0xNi4xMmMxMC40OTItMTAuNDkyLDEwLjQ5Mi0yNy41NzIsMC0zOC4wNkwxOTguNjA4LDI0Ni4xMDR6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
      background-position: top center;
      background-size: 8px 16px;
      background-repeat: no-repeat;
      transform: scale(-1, 1);
      opacity: 0.6;
    }
    .tree-item.is-last .tree-item-arrow {
      opacity: 0;
    }
    .tree-item.is-expanded > .tree-item-body .tree-item-arrow {
      transform: rotate(-90deg);
    }
  `],
})
export class ClickTreeNodeComponent implements OnInit {

  @Input() node: ClickTreeNode;
  @Input() nodes: Map<number, ClickTreeNode>;
  @Input() keyNode: ClickKeyNode;
  @Input() translations: ClickTreeViewTranslations = {
    NavigationTree_List_Selected: 'Selected',
    NavigationTree_List_NoItemAvailable: 'No items available',
    NavigationTree_Search_InputPlaceholder: 'Search domain...',
  };
  @Output() changed = new EventEmitter<{ node: ClickTreeNode, nodes: Map<number, ClickTreeNode> }>();
  @HostBinding('class') class: string = 'tree-item-node';

  constructor(
    private domSanitizer: DomSanitizer,
    private treeViewService: ClickTreeViewService,
    @Optional() private perfectScrollbarDirective: PerfectScrollbarDirective) {
  }

  ngOnInit(): void {
    this.node = this.nodes.get(this.keyNode.key);
  }

  onNodeClick($event: Event, node: ClickTreeNode): void {
    node.isExpanded = !node.isExpanded;
    this.updateScrollBar();

    if (this.keyNode.children.length === 0) {
      const nextState = node.checkState === CheckboxState.Checked ? CheckboxState.Unchecked : CheckboxState.Checked;
      this.onChecked(nextState, node);
      return;
    }

    if (node.isExpanded) {
      node.selectedAmount = 0;
      return;
    }

    node.selectedAmount = this.treeViewService.getAmountOfSelectedSubNodes(this.keyNode, this.nodes);
  }

  onSubNodeChanged(event: { node: ClickTreeNode, nodes: Map<number, ClickTreeNode> }): void {
    this.changed.emit(event);
  }

  onChecked(nextState: number, node: ClickTreeNode): void {
    node.checkState = nextState;

    if (node.checkState === CheckboxState.Unchecked) {
      node.selectedAmount = 0;
    }

    this.setCheckState(this.keyNode, nextState);
    this.setParentState(this.keyNode);

    this.changed.emit({ node, nodes: this.nodes });
  }

  getSelectedAmount(): string {
    const selectedString = this.translations.NavigationTree_List_Selected.toLowerCase();
    return this.node.selectedAmount ? `(${this.node.selectedAmount} ${selectedString})` : '';
  }

  getNodeStateClass(): string {
    const { children } = this.keyNode;
    const subNodes = children.map(x => this.nodes.get(x.key));
    const isChildrenVisible = subNodes.filter(x => x.isVisible).length > 0;
    const expandedState = this.node.isExpanded ? 'is-expanded' : 'is-collapsed';
    const isLast = children && children.length > 0 && isChildrenVisible ? expandedState : 'is-last';
    return isLast;
  }

  hasChildren(): boolean {
    return this.keyNode.children && this.keyNode.children.length > 0;
  }

  getLabelWithAmount(): SafeHtml {
    const label = !!this.node.highlightedLabel ? this.node.highlightedLabel : this.node.label;
    const htmlString = `${label} ${this.getSelectedAmount()}`;
    return this.domSanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private setCheckState(keyNode: ClickKeyNode, state: CheckboxState): void {
    const node = this.nodes.get(keyNode.key);
    node.checkState = state;
    node.isExpanded = state === CheckboxState.Checked;

    for (const childKey of keyNode.children) {
      this.setCheckState(childKey, state);
    }
  }

  private setParentState(keyNode: ClickKeyNode): void {
    const node = this.nodes.get(keyNode.key);
    if (!node.parentKey) {
      return;
    }

    const parent = this.nodes.get(node.parentKey);
    const parentChildren = [];
    this.nodes.forEach((x) => {
      if (x.parentKey === node.parentKey) {
        parentChildren.push(x);
      }
    });

    const checked = parentChildren.filter(x => x.checkState === CheckboxState.Checked);
    const intermediate = parentChildren.filter(x => x.checkState === CheckboxState.Intermediate);
    const unchecked = parentChildren.filter(x => x.checkState === CheckboxState.Unchecked);

    if (parentChildren.length > checked.length || intermediate.length > 0) {
      parent.checkState = CheckboxState.Intermediate;
    }

    if (parentChildren.length === checked.length) {
      parent.checkState = CheckboxState.Checked;
    }

    if (unchecked.length === parentChildren.length) {
      parent.checkState = CheckboxState.Unchecked;
    }

    this.setParentState(keyNode.parentKeyNode);
  }

  private updateScrollBar(): void {
    if (this.perfectScrollbarDirective) {
      this.perfectScrollbarDirective.update();
    }
  }
}
