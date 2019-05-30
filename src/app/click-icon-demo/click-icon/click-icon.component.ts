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
  @Input() withArrows?: boolean = false;
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() prev;
  @Output() next;

  constructor() {
  }
  ngOnInit() { }

  onClickHandler(event: KeyboardEvent): void | boolean {
    this.messageEvent.emit(this.name);
    return false;
  }
}
