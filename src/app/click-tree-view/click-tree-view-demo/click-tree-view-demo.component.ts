import { Component } from '@angular/core';

import { ClickTreeNode, ClickKeyNode } from '../models';

@Component({
  selector: 'click-tree-view-demo',
  templateUrl: './click-tree-view-demo.component.html',
  styleUrls: ['./click-tree-view-demo.component.scss']
})
export class ClickTreeViewDemoComponent {

  mockNodes: Map<number, ClickTreeNode> = new Map([
    [
      1, {
        key: 1,
        label: '1',
        loweredLabel: '1',
        isVisible: true,
      }
    ], [
      2, {
        key: 2,
        label: '2',
        loweredLabel: '2',
        isVisible: true,
      }
    ], [
      3, {
        key: 3,
        label: '3',
        loweredLabel: '3',
        isVisible: true,
        parentKey: 2,
      }
    ]
  ]);

  mockKeys: ClickKeyNode[];

  codes = [
    `<click-tree-view></click-tree-view>`,
    ``,
    ``,
  ];

  constructor() {
    const key1 = new ClickKeyNode(1);
    const key2 = new ClickKeyNode(2);
    const subKey3 = new ClickKeyNode(3);

    key2.children = [subKey3];
    subKey3.parentKeyNode = key2;

    this.mockKeys = [
      key1,
      key2,
    ];
  }
}
