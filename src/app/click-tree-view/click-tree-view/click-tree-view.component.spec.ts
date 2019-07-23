import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClickTreeViewComponent } from './click-tree-view.component';
import { ClickTreeNodeComponent } from '../click-tree-node/click-tree-node.component';
import { ClickSearchInputComponent } from '../../click-search-input/click-search-input/click-search-input.component';
import { ClickTristateCheckboxComponent } from '../../click-tristate-checkbox/click-tristate-checkbox/click-tristate-checkbox.component';
import { ClickTreeNode, ClickKeyNode } from '../models';


describe('ClickTreeViewComponent', () => {

  let component: ClickTreeViewComponent;
  let fixture: ComponentFixture<ClickTreeViewComponent>;

  const node1: ClickTreeNode = { key: 1, label: '1', loweredLabel: '1', isVisible: true };
  const node2: ClickTreeNode = { key: 2, label: '2', loweredLabel: '2', isVisible: true };
  const node3: ClickTreeNode = { key: 3, label: '3', loweredLabel: '3', isVisible: true };

  const key1 = new ClickKeyNode(1);
  const key2 = new ClickKeyNode(2);
  const key3 = new ClickKeyNode(3);
  key2.children = [key3];
  key3.parentKeyNode = key2;

  const keysWithChild = [key1, key2];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClickTreeViewComponent,
        ClickTreeNodeComponent,
        ClickTristateCheckboxComponent,
        ClickSearchInputComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTreeViewComponent);
    component = fixture.componentInstance;
  });

  it('shouldCreate', () => {
    expect(component).toBeTruthy();
  });

  it('withVisibleItems_shouldFillList', () => {
    component.nodes = new Map([
      [1, node1],
      [2, node2],
    ]);
    component.keys = [
      new ClickKeyNode(1),
      new ClickKeyNode(2),
    ];
    fixture.detectChanges();

    const itemsInList = fixture.debugElement.query(By.css('.tree-item-node'));
    expect(itemsInList.childNodes.length).toEqual(2);
  });

  it('withChildItemNodes_shouldDisplaySublists', () => {
    component.nodes = new Map([
      [1, node1],
      [2, { ...node2, isExpanded: true }],
      [3, { ...node3, parentKey: 2 }],
    ]);
    component.keys = keysWithChild;
    fixture.detectChanges();

    const sublist = fixture.debugElement.query(By.css('.tree-list.has-sublist'));
    expect(sublist).toBeTruthy();
  });

  it('onSearchChanged_shouldHighlightText', () => {
    component.nodes = new Map([
      [1, { ...node1, loweredLabel: '1' }],
      [2, { ...node2, loweredLabel: '2', isExpanded: true }],
      [3, { ...node3, loweredLabel: '3', parentKey: 2 }],
    ]);
    component.keys = keysWithChild;
    fixture.detectChanges();

    component.onSearchChanged('1');
    fixture.detectChanges();

    const highlightedElements = fixture.debugElement.nativeElement.querySelector('li.tree-item .tree-item-body');
    expect(highlightedElements).toBeTruthy();

    component.onSearchChanged('12');
    fixture.detectChanges();

    const unexistedElement = fixture.debugElement.nativeElement.querySelector('li.tree-item .tree-item-body');
    expect(unexistedElement).toBeFalsy();
  });

  it('workingNodesArray_shouldConvertMapToArray', () => {
    component.nodes = new Map([
      [1, { ...node1, loweredLabel: '1' }],
      [2, { ...node2, loweredLabel: '2', isExpanded: true }],
      [3, { ...node3, loweredLabel: '3', parentKey: 2 }],
    ]);
    component.keys = keysWithChild;
    fixture.detectChanges();

    expect(Array.isArray(component.workingNodesArray)).toBeTruthy();
    expect(component.workingNodesArray.length).toEqual(3);
  });

  it('getData_shouldReturnCorrectData', () => {
    component.nodes = new Map([
      [1, { ...node1, loweredLabel: '1' }],
      [2, { ...node2, loweredLabel: '2', isExpanded: true }],
      [3, { ...node3, loweredLabel: '3', parentKey: 2 }],
    ]);
    component.keys = keysWithChild;
    fixture.detectChanges();

    const testData = component.getData();

    expect(testData.length).toEqual(3);
    expect(Object.keys(testData[0])).toContain('key');
    expect(Object.keys(testData[0])).toContain('checkState');
  });

});
