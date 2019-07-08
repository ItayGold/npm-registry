export class ClickKeyNode {
  key: number;
  children: ClickKeyNode[] = [];
  parentKeyNode: ClickKeyNode;

  constructor(key?: number) {
    this.key = key;
  }
}
