import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const DEF_ICON_CLASSES = `calendar-icon w6 w6-calendar2 `;

@Component({
  selector: 'click-icon',
  template: `
    <span>
      <i *ngIf="withArrows" class="w6 w6-angle-left arrow leftArrow" (click)="onNavClicked($event, 'left')" tabindex="0"></i>
        <span>
          <i
            role="button"
            [id]="[id]"
            [ngClass]="[cssClasses]"
            (click)="onClickHandler($event)"
            (keypress)="onClickHandler($event)"
            tabindex="0">
          </i>
        </span>
      <i *ngIf="withArrows" class="w6 w6-angle-right arrow" (click)="onNavClicked($event, 'right')" tabindex="0"></i>
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

      .arrow:focus,
      .leftArrow:focus {
        color: #1174be;
        outline: none;
      }

      i {
        font-weight: 900;
      }
    `,
  ],
})
export class ClickIconComponent implements OnInit {
  @Input() withArrows?: boolean;
  @Input() name?: string;
  @Input() active?: string;
  @Input() cssClasses?: string;
  @Input() id?: string;
  @Output() messageEvent?: EventEmitter<string>;
  @Output() prev?: EventEmitter<string>;
  @Output() next?: EventEmitter<string>;

  constructor() {
    this.messageEvent = new EventEmitter<string>();
    this.prev = new EventEmitter<string>();
    this.next = new EventEmitter<string>();
  }
  ngOnInit() {
    this.withArrows = this.withArrows || false;

    this.cssClasses = this.cssClasses && this.cssClasses.length
      ? DEF_ICON_CLASSES + this.cssClasses
      : DEF_ICON_CLASSES;
  }

  onClickHandler(event: any): void | boolean {
    this.messageEvent.emit(this.name);
    return false;
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
