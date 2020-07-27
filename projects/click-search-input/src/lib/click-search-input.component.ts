import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'click-search-input',
  template: `
    <div class="search" [class.has-value]="hasValue">
      <i class="search-icon icon icon-search"></i>
      <button
        type="button"
        class="search-clear icon icon-remove"
        (click)="resetSearch()"
        (focusin)="onFocusIn()"
        (focusout)="onFocusOut()"></button>
      <input
        #searchInput
        type="text"
        class="search-input"
        (input)="onSearchChange($event.target.value)"
        (focusin)="onFocusIn()"
        (focusout)="onFocusOut()"
        [maxLength]="maxLength"
        [placeholder]="placeholder" />
    </div>
  `,
  styles: [`
    .search {
      position: relative;
      width: 100%;
      height: 38px;
    }
    :host-context(.tabs-search) .search {
      height: 100%;
    }
    :host-context(.table-heading.has-search) .search {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -1px;
      height: auto;
      width: auto;
    }
    .search-icon {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 38px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .search-icon.right {
      left: auto;
      right: 0;
    }
    .search-clear {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 50%;
      right: 7px;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: 0;
      background-color: transparent;
      box-shadow: none;
      transition: 0.3s ease;
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
    }
    .search.has-value .search-clear {
      opacity: 1;
      pointer-events: all;
    }
    .search-clear:focus {
      outline: none;
    }
    .search-input {
      width: 100%;
      height: 100%;
      padding-left: 38px;
      background-color: #fff;
      border: 1px solid #cbcbcb;
      color: #333;
      box-shadow: none;
      transition: 0.3s ease;
    }
    :host-context(.sidebar-search) .search-input {
      background-color: #3d474f;
      border: 1px solid #3d474f;
    }
    :host-context(.table-heading.has-search) .search-input:not(:focus):not(:hover):not(.has-value) {
      background-color: transparent;
    }
    .search-input:disabled {
      background-color: #f3f3f3;
      color: #808080;
      cursor: default;
    }
    .search-input::placeholder {
      color: #808080;
    }
    .search-input:hover {
      background-color: #fff;
      border-color: #a7a7a7;
    }
    .sidebar-search .search-input:hover {
      background-color: #323b43;
      border-color: #323b43;
    }
    .search-input:focus,
    .search-input:hover:focus {
      outline: none;
      box-shadow: none;
      background-color: #f6fbff;
      border-color: #a8c6da;
    }
    .search.has-value .search-input:not(:hover):not(:focus),
    .sidebar-search .search.has-value .search-input:not(:focus) {
      background-color: #fff;
    }
    .search-clear + .search-input,
    .search-icon.right + .search-input {
      padding-right: 38px;
    }
    .icon {
      display: inline-block;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .icon-search {
      background-size: 16px;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ESearch icon%3C/title%3E%3Cdesc%3EIcon for search field%3C/desc%3E%3Cg id='icons/15px/search/reg' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Shape-2' fill='%23808080' fill-rule='nonzero'%3E%3Cpath d='M14.6527737,13.8022376 L10.9550171,10.0892334 C11.9057753,8.99805621 12.5458625,7.48551768 12.5458625,6.05624408 C12.5458625,2.71688376 9.73177096,-2.39808173e-14 6.27293123,-2.39808173e-14 C2.8140915,-2.39808173e-14 -8.17124146e-13,2.71688376 -8.17124146e-13,6.05624408 C-8.17124146e-13,9.3956044 2.8140915,12.1124882 6.27293123,12.1124882 C7.57142799,12.1124882 8.94312463,11.6563647 10.0010681,10.9385681 L13.7269165,14.6797471 C14,14.9297485 14.3938293,15.0967407 14.6989441,14.7914734 C15.0126127,14.4776479 14.965602,14.1163724 14.6527737,13.8022376 Z M6.25,1.3 C8.97948824,1.3 11.2,3.44380817 11.2,6.07901113 C11.2,8.7142141 8.97948824,10.8580223 6.25,10.8580223 C3.52051176,10.8580223 1.3,8.7142141 1.3,6.07901113 C1.3,3.44380817 3.52051176,1.3 6.25,1.3 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    .icon-remove {
      background-size: 16px;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ERemove entered text%3C/title%3E%3Cdesc%3ERemove entered text%3C/desc%3E%3Cg id='icons/15px/close-full/reg' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='error' fill='%23A7A7A7' fill-rule='nonzero'%3E%3Cpath d='M12.8056963,2.19419547 C9.88024665,-0.731254192 5.11993372,-0.731542783 2.19419547,2.19419547 C-0.731542783,5.11993372 -0.731254192,9.87995806 2.19419547,12.8056963 C5.11964513,15.7314346 9.87995806,15.7314346 12.8056963,12.8056963 C15.731146,9.87995806 15.731146,5.11964513 12.8056963,2.19419547 Z M10.4588721,10.4588721 C10.2334824,10.6842619 9.86812582,10.6842619 9.64273604,10.4588721 L7.49994589,8.31608199 L5.25528302,10.5607449 C5.02989325,10.7861346 4.6645367,10.7861346 4.43914693,10.5607449 C4.21375715,10.3353551 4.21375715,9.96999853 4.43914693,9.74460875 L6.68380979,7.49994589 L4.54101964,5.35715574 C4.31562986,5.13176596 4.31562986,4.76612083 4.54101964,4.54101964 C4.76640942,4.31562986 5.13176596,4.31562986 5.35715574,4.54101964 L7.49994589,6.68380979 L9.54057473,4.64318095 C9.76596451,4.41779117 10.1313211,4.41779117 10.3567108,4.64318095 C10.5821006,4.86857073 10.5821006,5.23392727 10.3567108,5.45931705 L8.31608199,7.49994589 L10.4588721,9.64273604 C10.6842619,9.86812582 10.6842619,10.2334824 10.4588721,10.4588721 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  `]
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
