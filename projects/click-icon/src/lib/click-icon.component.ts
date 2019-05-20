import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'click-icon',
  template: `
    <span
      ><i
        role="button"
        [id]="[id]"
        [ngClass]="[imgClass]"
        (click)="onClickHandler()"
        tabindex="0"
      ></i
    ></span>
  `,
  styles: [
    `
      .icon,
      .calendar-icon {
        font-size: 20px;
        margin: 20px 10px 20px 20px;
        color: #a7a7a7;
        cursor: pointer;
      }
      .icon:hover,
      .calendar-icon:hover {
        color: #1174be;
      }
      .icon:focus,
      .calendar-icon:focus {
        outline: none;
        color: #1174be;
      }
      .calendar-icon {
        margin: 12px;
      }
    `,
  ],
})
export class ClickIconComponent implements OnInit {
  @Input() name: string;
  @Input() active: string;
  @Input() imgClass: string;
  @Input() id: string;
  @Output() MessageEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  onClickHandler(): void {
    this.MessageEvent.emit(this.name);
  }
}
