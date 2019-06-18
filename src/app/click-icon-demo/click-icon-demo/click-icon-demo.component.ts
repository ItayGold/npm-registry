import { Component, OnInit } from '@angular/core';

/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://stackblitz.com/edit/angular-1wmnxx</example-url>
 */


interface Tooltip {
  left: string;
  right: string;
  icon: string;
}

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
  tooltip: Tooltip;

  constructor() {
    this.clickIconId = `click-icon-demo`;
    this.clickIconName = `resolution`;
    this.clickIconClasses = ``;
    this.clickIconTitle = `Click Icon Title`;
    this.demoWithArrows = true;
    this.demoWithoutArrows = false;

    this.tooltip = {
      left: 'Move 1 Day Backward',
      right: 'Move 1 Day Forward',
      icon: 'Change Start Date Of The Gantt'
    };
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
