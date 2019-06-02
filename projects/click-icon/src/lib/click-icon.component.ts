import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'click-icon',
  template: `
    <span>
      <i *ngIf="withArrows" class="fa fa-angle-left arrow leftArrow" (click)="onNavClicked($event, 'left')" tabindex="0"></i>
        <span>
          <i
            role="button"
            [id]="[id]"
            [ngClass]="[imgClass]"
            (click)="onClickHandler($event)"
            tabindex="0">
          </i>
        </span>
      <i *ngIf="withArrows" class="fa fa-angle-right arrow" (click)="onNavClicked($event, 'right')" tabindex="0"></i>
    </span>
  `,
  styles: [
    `
      .icon,
      .calendar-icon {
        font-size: 20px;
        margin: 12px;
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
  @Input() withArrows: boolean;
  @Input() name: string;
  @Input() active: string;
  @Input() imgClass?: string;
  @Input() id: string;
  @Output() messageEvent: EventEmitter<string>;
  @Output() prev: EventEmitter<string>;
  @Output() next: EventEmitter<string>;

  constructor() {
    this.withArrows = this.withArrows || false;
    this.messageEvent = new EventEmitter<string>();
    this.prev = new EventEmitter<string>();
    this.next = new EventEmitter<string>();
    this.imgClass = this.imgClass && this.imgClass.length
      ? `calendar-icon fa fa-calendar ` + this.imgClass
      : `calendar-icon fa fa-calendar`;
  }
  ngOnInit() { }

  onClickHandler(event): void {
    this.messageEvent.emit(event.target);
  }

  onNavClicked(event: KeyboardEvent, direction: string): void | boolean {
    if (!this.withArrows) {
      return false;
    }

    if (direction === 'left') {
      this.prev.emit(direction);
    } else {
      this.next.emit(direction);
    }

    event.preventDefault();
    event.stopPropagation();
  }
}
