import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ClickTristateCheckboxState as CheckboxState } from '../../click-tristate-checkbox/enums/click-tristate-checkbox-state';

import { ClickTreeViewCalculationService } from '../services';
import {
  ClickKeyNode,
  ClickTreeNode,
  ClickITreeViewSelection,
  ClickTreeViewTranslations,
} from '../models';
/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://npm-demo.goup.tech/tree-view</example-url>
 */
@Component({
  selector: 'click-tree-view',
  templateUrl: './click-tree-view.component.html',
  styleUrls: ['./click-tree-view.component.scss'],
})
export class ClickTreeViewComponent implements OnInit {
  public hasResults: boolean = true;

  private workingNodes: Map<number, ClickTreeNode> = new Map<
    number,
    ClickTreeNode
  >();

  @Input() keys: ClickKeyNode[];
  @Input() nodes: Map<number, ClickTreeNode>;
  @Input() translations: ClickTreeViewTranslations = {
    NavigationTree_List_Selected: 'Selected',
    NavigationTree_List_NoItemAvailable: 'No items available',
    NavigationTree_Search_InputPlaceholder: 'Search domain...',
  };
  @Output() changeTree = new EventEmitter<{
    node: ClickTreeNode;
    nodes: Map<number, ClickTreeNode>;
  }>();

  @ViewChild('searchInput', { static: false }) searchInput: any;
  @ViewChild('scrollContainer', {
    read: PerfectScrollbarDirective,
    static: false,
  })
  perfectScrollbarDirective: PerfectScrollbarDirective;

  constructor(private calculationService: ClickTreeViewCalculationService) {}

  ngOnInit(): void {
    if (!this.nodes) {
      this.hasResults = false;
      return;
    }

    this.nodes.forEach(node => {
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
      node.selectedAmount = this.calculationService.getAmountOfSelectedSubNodes(
        childNode,
        this.nodes
      );
    }
  }

  refreshNodes(): void {
    this.workingNodes.forEach(node => {
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

  onTreeNodeChanged(event: {
    node: ClickTreeNode;
    nodes: Map<number, ClickTreeNode>;
  }): void {
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
    return this.workingNodesArray.map(({ key, checkState }) => ({
      key,
      checkState,
    }));
  }

  highlightString(str: string, subStr: string, className: string): string {
    return subStr
      ? `<span>${str.replace(
          new RegExp(subStr, 'i'),
          `<span class="${className}">$&</span>`
        )}</span>`
      : str;
  }

  private markResults(
    node: ClickTreeNode,
    keyNode: ClickKeyNode,
    searchString: string
  ): void {
    if (node.loweredLabel.indexOf(searchString.toLocaleLowerCase()) >= 0) {
      node.highlightedLabel = this.highlightString(
        node.label,
        searchString,
        'highlighted'
      );
      node.isExpanded = true;
      node.isVisible = true;
      node.parentKey &&
        this.expandParents(
          this.workingNodes.get(node.parentKey),
          keyNode.parentKeyNode
        );
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
