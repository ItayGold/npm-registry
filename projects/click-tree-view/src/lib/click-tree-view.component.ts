import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ClickTristateCheckboxState as CheckboxState } from '@click/tristate-checkbox';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

import { ClickTreeViewService } from './click-tree-view.service';
import { ClickKeyNode, ClickTreeNode, ClickITreeViewSelection, ClickTreeViewTranslations } from '../models';

@Component({
  selector: 'click-tree-view',
  template: `
    <div class="tree">
      <div class="tree-search">
        <click-search-input
          #searchInput
          (changed)="onSearchChanged($event)"
          [placeholder]="translations.NavigationTree_Search_InputPlaceholder"
        ></click-search-input>
      </div>
      <ul class="tree-list is-root scroller-container">
        <div #scrollContainer *ngIf="hasResults" class="tree-list-inner" perfectScrollbar>
          <click-tree-node
            *ngFor="let keyNode of keys"
            [keyNode]="keyNode"
            [nodes]="workingNodes"
            [translations]="translations"
            (changed)="onTreeNodeChanged($event)"
          ></click-tree-node>
        </div>
        <li *ngIf="!hasResults" class="tree-item">
          <div class="tree-item-label">{{ translations.NavigationTree_List_NoItemAvailable }}</div>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    :host,
    .tree {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0%;
    }
    .tree-search {
      margin-bottom: 12px;
    }
    :host-context(.modal-body.with-search) .tree-search {
      padding: 0 15px;
    }
    .tree-list {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      color: #333;
      min-height: 0%;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    :host-context(.nav-tree-body) .tree > .tree-list {
      margin-left: 15px;
    }
    .tree-list .tree-list {
      padding-left: 27px;
    }
    .tree-list-inner {
      margin-right: 15px;
      margin-bottom: 28px;
    }
    .tree-list > * {
      flex: 1 1 auto;
      min-height: 0%;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class ClickTreeViewComponent implements OnInit {

  public hasResults: boolean = true;
  public workingNodes: Map<number, ClickTreeNode> = new Map<number, ClickTreeNode>();

  @Input() keys: ClickKeyNode[];
  @Input() nodes: Map<number, ClickTreeNode>;
  @Input() translations: ClickTreeViewTranslations = {
    NavigationTree_List_Selected: 'Selected',
    NavigationTree_List_NoItemAvailable: 'No items available',
    NavigationTree_Search_InputPlaceholder: 'Search domain...',
  };
  @Output() changeTree = new EventEmitter<{ node: ClickTreeNode, nodes: Map<number, ClickTreeNode> }>();

  @ViewChild('searchInput') searchInput: any;
  @ViewChild('scrollContainer', { read: PerfectScrollbarDirective }) perfectScrollbarDirective: PerfectScrollbarDirective;

  constructor(private treeViewService: ClickTreeViewService) {}

  ngOnInit(): void {
    if (!this.nodes) {
      this.hasResults = false;
      return;
    }

    this.nodes.forEach((node) => {
      if (!node.isVisible) {
        return;
      }

      const copiedNode = new ClickTreeNode();
      copiedNode.key = node.key;
      copiedNode.parentKey = node.parentKey;
      copiedNode.selectedAmount = node.selectedAmount;
      copiedNode.checkState = node.checkState || CheckboxState.Unchecked;
      copiedNode.isExpanded = node.isExpanded;
      copiedNode.isVisible = node.isVisible;
      copiedNode.label = node.label;
      copiedNode.loweredLabel = node.loweredLabel;
      copiedNode.levelIndex = node.levelIndex;

      this.workingNodes.set(copiedNode.key, copiedNode);
    });

    for (const childNode of this.keys) {
      const node = this.workingNodes.get(childNode.key);
      node.selectedAmount = this.treeViewService.getAmountOfSelectedSubNodes(childNode, this.nodes);
    }
  }

  refreshNodes(): void {
    this.workingNodes.forEach((node) => {
      node.isExpanded = false;
      node.isVisible = true;
      node.highlightedLabel = '';
    });
  }

  onSearchChanged(query: string) {
    if (!query) {
      this.refreshNodes();
      this.checkVisibleNodes();
      this.updateScrollBar();
      return;
    }

    if (!this.keys) {
      return;
    }

    for (const keyNode of this.keys) {
      const node = this.workingNodes.get(keyNode.key);
      this.markResults(node, keyNode, query);
    }

    this.checkVisibleNodes();
    this.updateScrollBar();
  }

  onTreeNodeChanged(event: { node: ClickTreeNode, nodes: Map<number, ClickTreeNode> }): void {
    this.checkVisibleNodes();
    this.updateScrollBar();
    this.changeTree.emit(event);
  }

  checkVisibleNodes(): void {
    this.hasResults = this.workingNodesArray.some(item => !!item.isVisible);
  }

  get workingNodesArray(): ClickTreeNode[] {
    return Array.from(this.workingNodes.values());
  }

  getData(): ClickITreeViewSelection[] {
    return this.workingNodesArray.map(({ key, checkState }) => ({ key, checkState }));
  }

  highlightString(str: string, subStr: string, className: string): string {
    return subStr
      ? `<span>${str.replace(new RegExp(subStr, 'i'), `<span class="${className}">$&</span>`)}</span>`
      : str;
  }

  private markResults(node: ClickTreeNode, keyNode: ClickKeyNode, searchString: string): void {
    if (node.loweredLabel.indexOf(searchString.toLocaleLowerCase()) >= 0) {
      node.highlightedLabel = this.highlightString(node.label, searchString, 'highlighted');
      node.isExpanded = true;
      node.isVisible = true;
      node.parentKey && this.expandParents(this.workingNodes.get(node.parentKey), keyNode.parentKeyNode);
    } else {
      node.highlightedLabel = '';
      node.isExpanded = false;
      node.isVisible = false;
    }

    if (keyNode.children.length === 0) {
      return;
    }

    for (const childKey of keyNode.children) {
      const node = this.workingNodes.get(childKey.key);
      this.markResults(node, childKey, searchString);
    }
  }

  private expandParents(node: ClickTreeNode, keyNode: ClickKeyNode): void {
    node.isExpanded = true;
    node.isVisible = true;

    if (!node.parentKey) {
      return;
    }

    const parent = this.nodes.get(node.parentKey);
    this.expandParents(parent, keyNode.parentKeyNode);
  }

  private updateScrollBar(): void {
    if (this.perfectScrollbarDirective) {
      this.perfectScrollbarDirective.update();
    }
  }
}
