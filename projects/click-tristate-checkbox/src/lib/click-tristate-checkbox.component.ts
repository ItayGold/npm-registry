import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickTristateCheckboxState } from './click-tristate-checkbox-state.enum';

@Component({
  selector: 'click-tristate-checkbox',
  template: `
    <div class="form-field" [class.has-error]="!!errorLabel">
      <div class="checkbox" [class.multiselected]="valueInternal === checkboxState.Intermediate">
        <input
          [id]="id"
          (change)="onCheckboxChange()"
          [checked]="convertCheckboxStateToBoolean()"
          [disabled]="disabled"
          class="checkbox-input visually-hidden"
          type="checkbox"
        >
        <label class="checkbox-control" [for]="id">
          <span class="checkbox-mark"></span>
          <span class="checkbox-label" *ngIf="checkboxLabel">
            {{ checkboxLabel }}
          </span>
        </label>
      </div>
      <div class="form-error">{{ errorLabel }}</div>
    </div>
  `,
  styles: [`
    .form-field {
      color: #333;
      font-size: 14px;
    }
    .form-field + .form-field {
      margin-left: 10px;
    }
    .form-error {
      display: none;
      margin-top: 3px;
      color: #cd4032;
      font-weight: 500;
    }
    .form-field.has-error .form-error {
      display: block;
    }
    .checkbox ~ .form-error {
      margin-left: 25px;
    }
    .checkbox-control {
      display: flex;
      margin: 0;
      cursor: pointer;
    }
    .checkbox-input:disabled ~ .checkbox-control {
      cursor: default;
      color: #808080;
    }
    .checkbox-label:not(:empty) {
      margin-left: 9px;
      line-height: 19px;
    }
    :host-context(.dropdown-filters) .checkbox-label {
      white-space: nowrap;
    }
    .checkbox-mark {
      position: relative;
      display: inline-block;
      height: 16px;
      width: 16px;
      border-radius: 2px;
      border: 1px solid #cbcbcb;
      transition: 0.3s ease;
      flex: 0 0 auto;
    }
    .checkbox-mark::before, .checkbox-mark::after {
      content: none;
      position: absolute;
      width: 1.5px;
      background-color: #fff;
      display: block;
    }
    .checkbox-input ~ .checkbox-control .checkbox-mark::after {
      content: none;
    }
    .checkbox-input:checked ~ .checkbox-control .checkbox-mark::before {
      content: '';
      top: 7px;
      left: 3px;
      transform: rotate(-45deg);
      height: 4px;
    }
    .checkbox-input:checked ~ .checkbox-control .checkbox-mark::after {
      content: '';
      top: 3px;
      left: 7px;
      transform: rotate(-135deg);
      height: 9px;
    }
    .checkbox.multiselected .checkbox-input:checked ~ .checkbox-control .checkbox-mark::after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2px;
      width: 10px;
    }
    .checkbox.multiselected .checkbox-input:checked ~ .checkbox-control .checkbox-mark::before {
      content: none;
    }
    .checkbox-input:disabled ~ .checkbox-control .checkbox-mark {
      background-color: #f3f3f3;
      border-color: #f3f3f3;
    }
    .checkbox-input:checked:disabled ~ .checkbox-control .checkbox-mark {
      background-color: #cbcbcb;
      border-color: #f3f3f3;
    }
    .checkbox-input:focus ~ .checkbox-control .checkbox-mark {
      border-color: #0875bf;
      box-shadow: 0 0 2px 0 #0875bf;
    }
    .checkbox-input:checked:not(:disabled) ~ .checkbox-control .checkbox-mark {
      background-color: #0875bf;
      border-color: #0875bf;
    }
    .checkbox:hover .checkbox-input:not(:disabled) ~ .checkbox-control .checkbox-mark {
      border-color: #a7a7a7;
    }
    .checkbox:hover .checkbox-input:checked:not(:disabled) ~ .checkbox-control .checkbox-mark {
      background-color: #08559d;
      border-color: #08559d;
    }
    .form-field.has-error .checkbox-input ~ .checkbox-control .checkbox-mark, .form-field.has-error .checkbox-input:hover ~ .checkbox-control .checkbox-mark {
      border-color: #cd4032;
    }
    .visually-hidden {
      margin: -1px;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }
  `],
})
export class ClickTristateCheckboxComponent {

  id = this.generateUniqueId();
  checkboxState = ClickTristateCheckboxState;
  valueInternal = ClickTristateCheckboxState.Unchecked;

  @Input() disabled = false;
  @Input() checkboxLabel: string;
  @Input() errorLabel: string;
  @Input()
  set value(value: number | boolean) {
    if (value === true) {
      this.valueInternal = ClickTristateCheckboxState.Checked;
    } else if (value === false) {
      this.valueInternal = ClickTristateCheckboxState.Unchecked;
    } else {
      this.valueInternal = value;
    }
  }
  @Output() valueChanged: EventEmitter<ClickTristateCheckboxState> = new EventEmitter<ClickTristateCheckboxState>();

  convertCheckboxStateToBoolean(): boolean {
    return this.valueInternal === ClickTristateCheckboxState.Unchecked ? false : true;
  }

  private generateUniqueId(): string {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }

  private calculateNextState(): ClickTristateCheckboxState {
    return this.valueInternal === ClickTristateCheckboxState.Unchecked
      ? ClickTristateCheckboxState.Checked
      : ClickTristateCheckboxState.Unchecked;
  }

  onCheckboxChange() {
    this.valueInternal = this.calculateNextState();
    this.valueChanged.emit(this.valueInternal);
  }
}
