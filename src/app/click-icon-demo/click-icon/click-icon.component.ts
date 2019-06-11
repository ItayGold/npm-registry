import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
const DEF_ICON_CLASSES = `calendar-icon w6 w6-calendar2 `;

@Component({
  selector: 'click-icon',
  templateUrl: './click-icon.component.html',
  styleUrls: ['./click-icon.component.scss'],
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
