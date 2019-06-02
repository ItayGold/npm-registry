import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'click-icon',
  templateUrl: './click-icon.component.html',
  styleUrls: ['./click-icon.component.scss'],
})
export class ClickIconComponent implements OnInit {
  @Input() name: string;
  @Input() active: string;
  @Input() imgClass: string;
  @Input() id: string;
  @Input() withArrows?: boolean;
  @Output() messageEvent: EventEmitter<string>;
  @Output() prev: EventEmitter<string>;
  @Output() next: EventEmitter<string>;

  constructor() {
    this.withArrows = this.withArrows || false;
    this.messageEvent = new EventEmitter<string>();
    this.prev = new EventEmitter<string>();
    this.next = new EventEmitter<string>();
    this.imgClass = `fa fa-calendar`;
  }
  ngOnInit() { }

  onClickHandler(event: KeyboardEvent): void | boolean {
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
