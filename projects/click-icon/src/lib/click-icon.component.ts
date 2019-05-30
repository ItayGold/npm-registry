import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'click-icon',
  template: `
    <span>
      <i *ngIf="withArrows" class="fa fa-angle-left arrow leftArrow" (click)="prev()" tabindex="0"></i>
        <span>
          <i
            role="button"
            [id]="[id]"
            [ngClass]="[imgClass]"
            (click)="onClickHandler($event)"
            tabindex="0">
          </i>
        </span>
      <i *ngIf="withArrows" class="fa fa-angle-right arrow" (click)="next()" tabindex="0"></i>
    </span>
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

      .leftArrow {
        margin-left: 20px;
      }

      .arrow {
        font-size: 20px;
        color: #A7A7A7;
        cursor: pointer;
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

  constructor() { }
  ngOnInit() { }

  onClickHandler(): void {
    this.MessageEvent.emit(this.name);
  }
}
