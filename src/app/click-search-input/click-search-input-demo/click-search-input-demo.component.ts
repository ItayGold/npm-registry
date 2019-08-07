import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/search-input</example-url>
 */
@Component({
  selector: 'click-search-input-demo',
  templateUrl: './click-search-input-demo.component.html',
  styleUrls: ['./click-search-input-demo.component.scss']
})
export class ClickSearchInputDemoComponent {

  codes = [
    `<click-search-input></click-search-input>`,
    `<click-search-input [placeholder]="Type search string..."></click-search-input>`,
    `<click-search-input (changed)="onChanged($event)"></click-search-input>`,
    ``,
    ``,
  ];

  onChanged(event) {
    window.alert(event);
    return false;
  }

}
