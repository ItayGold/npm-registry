import { Injectable } from '@angular/core';
import { ClickTristateCheckboxState as CheckboxState } from '@click/tristate-checkbox';
import { ClickKeyNode, ClickTreeNode } from '../models';


@Injectable({ providedIn: 'root' })
export class ClickTreeViewService {
  getAmountOfSelectedSubNodes(keyNode: ClickKeyNode, nodes: Map<number, ClickTreeNode>): number {
    const amountWrapper = {
      amount: 0
    };

    for (const childKey of keyNode.children) {
      this.calculateSelectedAmount(childKey, amountWrapper, nodes);
    }

    return amountWrapper.amount;
  }

  private calculateSelectedAmount(keyNode: ClickKeyNode, amountObj: { amount: number }, nodes: Map<number, ClickTreeNode>): void {
    const node = nodes.get(keyNode.key);

    if (node.isVisible && (node.checkState === CheckboxState.Checked || node.checkState === CheckboxState.Intermediate)) {
      amountObj.amount += 1;
    }

    if (!keyNode.children) {
      return;
    }

    for (const childKey of keyNode.children) {
      this.calculateSelectedAmount(childKey, amountObj, nodes);
    }
  }
}
