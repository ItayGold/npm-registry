import { Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ClickTristateCheckboxState as CheckboxState } from '@click/tristate-checkbox';

import { ClickTreeNode, ClickKeyNode } from '../models';
import { ClickTreeViewCalculationService } from '../services/click-tree-view-calculation.service';

@Component({
  selector: 'click-tree-node',
  templateUrl: './click-tree-node.component.html',
  styleUrls: ['./click-tree-node.component.scss'],
})
export class ClickTreeNodeComponent implements OnInit {

  @Input() node: ClickTreeNode;
  @Input() nodes: Map<number, ClickTreeNode>;
  @Input() keyNode: ClickKeyNode;
  @Output() changed = new EventEmitter<{ node: ClickTreeNode, nodes: Map<number, ClickTreeNode> }>();
  @HostBinding('class') class: string = 'tree-item-node';

  constructor(
    private domSanitizer: DomSanitizer,
    private calculationService: ClickTreeViewCalculationService,
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

    node.selectedAmount = this.calculationService.getAmountOfSelectedSubNodes(this.keyNode, this.nodes);
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
    return this.node.selectedAmount ? `(${this.node.selectedAmount} selected)` : '';
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
