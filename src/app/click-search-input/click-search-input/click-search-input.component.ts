import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'click-search-input',
  templateUrl: './click-search-input.component.html',
  styleUrls: ['./click-search-input.component.scss']
})
export class ClickSearchInputComponent {

  hasValue = false;

  @Input() placeholder = 'Search...';
  @Output() changed = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;
  @HostBinding('class.search-focus') searchFocus = false;

  onFocusIn(): void {
    this.searchFocus = true;
  }

  onFocusOut(): void {
    this.searchFocus = false;
  }

  onSearchChange(value: string): void {
    this.hasValue = !!value;
    this.changed.emit(value.trim());
  }

  resetSearch(): void {
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.dispatchEvent(new Event('input'));
    this.searchFocus = false;
  }

}
