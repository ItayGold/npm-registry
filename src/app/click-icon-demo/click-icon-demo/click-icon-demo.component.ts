import { Component, OnInit } from '@angular/core';

/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/icon</example-url>
 */
@Component({
  selector: 'app-click-icon-demo',
  templateUrl: './click-icon-demo.component.html',
  styleUrls: ['./click-icon-demo.component.scss']
})
export class ClickIconDemoComponent implements OnInit {
  clickIconId: string;
  clickIconName: string;
  clickIconClasses: string;
  clickIconTitle: string;
  demoWithArrows: boolean;
  demoWithoutArrows: boolean;

  constructor() {
    this.clickIconId = `click-icon-demo`;
    this.clickIconName = `resolution`;
    this.clickIconClasses = ``;
    this.clickIconTitle = `Click Icon Title`;
    this.demoWithArrows = true;
    this.demoWithoutArrows = false;
  }

  ngOnInit() {
  }

  onClickIcon(event: any): void | boolean {
    alert(`The click on the icon has been triggered: ${event.type}`);
    return false;
  }

  getIconName(name: string): void {
    alert(`The name of the clicked icon: ${name}`);
  }

  onPrevClicked(direction: string) {
    alert(`The direction is ${direction}`);
  }

  onNextClicked(direction: string) {
    alert(`The direction is ${direction}`);
  }
}
