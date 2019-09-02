import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const DEF_ICON_CLASSES = `calendar-icon w6 w6-calendar2 `;

/**
 * CSS class calender with typo
 * supports the automation tests
 * TODO: fix the typo at automation tests and the component
 */
@Component({
  selector: 'click-icon',
  template: `
    <span class="calender">
      <i *ngIf="withArrows" class="w6 w6-angle-left arrow leftArrow" title="{{title['left']}}"
      (keypress)="onNavClicked($event, 'left')" (click)="onNavClicked($event, 'left')" tabindex="0"></i>
        <span>
          <i title="{{title['icon']}}"
            role="button"
            [ngClass]="[cssClasses]"
            (click)="onClickHandler($event)"
            (keypress)="onClickHandler($event)"
            tabindex="0">
          </i>
        </span>
      <i *ngIf="withArrows" class="w6 w6-angle-right arrow" title="{{title['right']}}"
      (keypress)="onNavClicked($event, 'right')" (click)="onNavClicked($event, 'right')" tabindex="0"></i>
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
        margin: 8px;
      }

      .leftArrow {
        margin-left: 20px;
      }

      .arrow {
        color: #A7A7A7;
        cursor: pointer;
        font-size: 12px;
        position: relative;
        top: -2px;
      }
      .arrow:hover {
        color: #1174be;
      }

      .arrow:focus,
      .leftArrow:focus {
        color: #1174be;
        outline: none;
      }
    `,
  ],
})
export class ClickIconComponent implements OnInit {
  @Input() withArrows?: boolean;
  @Input() active?: string;
  @Input() cssClasses?: string;
  @Output() messageEvent?: EventEmitter<string>;
  @Output() prev?: EventEmitter<string>;
  @Output() next?: EventEmitter<string>;
  @Input() title: object;


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
    this.messageEvent.emit(JSON.stringify(event));
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
