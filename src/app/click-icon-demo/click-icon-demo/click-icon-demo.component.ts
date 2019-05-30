import { Component, OnInit } from '@angular/core';

/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://localhost:4200/icon</example-url>
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

  constructor() {
    this.clickIconId = `click-icon-demo`;
    this.clickIconName = `resolution`;
    this.clickIconClasses = `fa fa-list-alt icon`;
    this.clickIconTitle = `Click Icon Title`;
  }

  ngOnInit() {
  }

  onClickIcon(event: KeyboardEvent): void | boolean {
    alert(`The click on the icon has been triggered: ${event}`);
    return false;
  }

  getIconName(name: string): void {
    alert(`The name of the clicked icon: ${name}`);
  }
<<<<<<< HEAD
=======

  onKeydownHandler(event: KeyboardEvent): void | boolean {
    alert(`[LOG] the icon is Clicked: ${event.type}`);
    return false;
  }
>>>>>>> click-icon
}
