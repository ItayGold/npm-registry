import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>https://npm-demo.goup.tech/search-input</example-url>
 */
@Component({
  selector: 'click-search-input',
  templateUrl: './click-search-input.component.html',
  styleUrls: ['./click-search-input.component.scss'],
})
export class ClickSearchInputComponent {
  public hasValue: boolean = false;

  @Input() placeholder: string = 'Search...';
  @Input() maxLength: number = 32;
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  @HostBinding('class.search-focus') searchFocus: boolean = false;

  onFocusIn(): void {
    this.searchFocus = true;
  }

  onFocusOut(): void {
    this.searchFocus = false;
  }

  onSearchChange(query: string): void {
    this.hasValue = !!query;
    this.changed.emit(query && query.trim());
  }

  resetSearch(): void {
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.dispatchEvent(new Event('input'));
  }
}
