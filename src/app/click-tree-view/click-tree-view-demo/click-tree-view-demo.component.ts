import { Component } from '@angular/core';

import {
  ClickTreeNode,
  ClickKeyNode,
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
  selector: 'click-tree-view-demo',
  templateUrl: './click-tree-view-demo.component.html',
  styleUrls: ['./click-tree-view-demo.component.scss'],
})
export class ClickTreeViewDemoComponent {
  mockNodes: Map<number, ClickTreeNode> = new Map([
    [1, { key: 1, label: '1', loweredLabel: '1', isVisible: true }],
    [2, { key: 2, label: '2', loweredLabel: '2', isVisible: true }],
    [
      3,
      { key: 3, label: '3', loweredLabel: '3', isVisible: true, parentKey: 2 },
    ],
  ]);
  mockNodes2 = new Map(this.mockNodes);
  mockNodes3 = new Map(this.mockNodes);
  mockNodes4 = new Map(this.mockNodes);

  translations: ClickTreeViewTranslations = {
    NavigationTree_List_Selected: 'выбрано',
    NavigationTree_List_NoItemAvailable: 'Нет элементов',
    NavigationTree_Search_InputPlaceholder: 'Домен поиска...',
  };

  mockKeys: ClickKeyNode[];

  codes = [
    `<click-tree-view></click-tree-view>`,
    `<click-tree-view filterPlaceholder="Type search string..."></click-tree-view>`,

    `const nodeItems = new Map([
  [ 1, { key: 1, label: '1', loweredLabel: '1', isVisible: true }],
  [ 2, { key: 2, label: '2', loweredLabel: '2', isVisible: true }],
  [ 3, { key: 3, label: '3', loweredLabel: '3', isVisible: true, parentKey: 2 }]
]);

const keyItems = [
  { key: 1, children: [] }
  { key: 2, children: [{
      key: 3,
      children: [],
      parentKeyNode: { key: 2, children: [{ key: 3, children: [] }] }
    }]
  }
];

<click-tree-view [nodes]="nodesItems" [keys]="keyItems"></click-tree-view>`,

    `const nodeItems = new Map([
  [ 1, { key: 1, label: '1', loweredLabel: '1', isVisible: true }],
  [ 2, { key: 2, label: '2', loweredLabel: '2', isVisible: true, isExpanded: true }],
  [ 3, { key: 3, label: '3', loweredLabel: '3', isVisible: true, parentKey: 2 }]
]);

const keyItems = [
  { key: 1, children: [] }
  { key: 2, children: [{
      key: 3,
      children: [],
      parentKeyNode: { key: 2, children: [{ key: 3, children: [] }] }
    }]
  }
];

<click-tree-view [nodes]="nodesItems" [keys]="keyItems"></click-tree-view>`,

    `const nodeItems = new Map([
  [ 1, { key: 1, label: '1', loweredLabel: '1', isVisible: true }],
  [ 2, { key: 2, label: '2', loweredLabel: '2', isVisible: true }],
  [ 3, { key: 3, label: '3', loweredLabel: '3', isVisible: true, checkState: 1, parentKey: 2 }]
]);

const keyItems = [
  { key: 1, children: [] }
  { key: 2, children: [{
      key: 3,
      children: [],
      parentKeyNode: { key: 2, children: [{ key: 3, children: [] }] }
    }]
  }
];

<click-tree-view [nodes]="nodesItems" [keys]="keyItems"></click-tree-view>`,

    `const nodeItems = new Map([
  [ 1, { key: 1, label: '1', loweredLabel: '1', isVisible: true }],
  [ 2, { key: 2, label: '2', loweredLabel: '2', isVisible: true }],
  [ 3, { key: 3, label: '3', loweredLabel: '3', isVisible: true, parentKey: 2 }]
]);

const keyItems = [
  { key: 1, children: [] }
  { key: 2, children: [{
      key: 3,
      children: [],
      parentKeyNode: { key: 2, children: [{ key: 3, children: [] }] }
    }]
  }
];

<click-tree-view [nodes]="nodesItems" [keys]="keyItems" (changeTree)="onChangeTree($event)"></click-tree-view>`,
    `
// keyItems, nodesItems - the same as before

translations: ClickTreeViewTranslations = {
  NavigationTree_List_Selected: 'выбрано',
  NavigationTree_List_NoItemAvailable: 'Нет элементов',
  NavigationTree_Search_InputPlaceholder: 'Домен поиска...',
};

<click-tree-view [nodes]="nodesItems" [keys]="keyItems" [translations]="translations"></click-tree-view>`,
  ];

  constructor() {
    const key1 = new ClickKeyNode(1);
    const key2 = new ClickKeyNode(2);
    const subKey3 = new ClickKeyNode(3);

    key2.children = [subKey3];
    subKey3.parentKeyNode = key2;

    this.mockKeys = [key1, key2];

    this.mockNodes2.set(2, {
      key: 2,
      label: '2',
      loweredLabel: '2',
      isExpanded: true,
      isVisible: true,
    });

    this.mockNodes3.set(3, {
      key: 3,
      label: '3',
      loweredLabel: '3',
      checkState: 1,
      isVisible: true,
      parentKey: 2,
    });
  }

  onChangeTree(event) {
    window.alert(
      `Node with key: ${event.node.key} has changed state to ${event.node.checkState}`
    );
    return false;
  }
}
