import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';

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
    alert(event);
    return false;
  }

}
