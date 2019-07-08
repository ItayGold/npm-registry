import { Injectable } from '@angular/core';
import { ClickKeyNode, ClickTreeNode } from '../models';

import { ClickTristateCheckboxState as CheckboxState } from '../../click-tristate-checkbox/enums';

@Injectable({ providedIn: 'root' })
export class ClickTreeViewCalculationService {
  getAmountOfSelectedSubNodes(keyNode: ClickKeyNode, nodes: Map<number, ClickTreeNode>) {
    const amountWrapper = {
      amount: 0
    };

    for (const childKey of keyNode.children) {
      this.calculateSelectedAmount(childKey, amountWrapper, nodes);
    }

    return amountWrapper.amount;
  }

  private calculateSelectedAmount(keyNode: ClickKeyNode, amountObj: { amount: number }, nodes: Map<number, ClickTreeNode>) {
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
