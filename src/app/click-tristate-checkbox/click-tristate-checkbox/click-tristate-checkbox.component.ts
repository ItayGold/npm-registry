import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickTristateCheckboxState } from '../enums';

@Component({
  selector: 'click-tristate-checkbox',
  templateUrl: './click-tristate-checkbox.component.html',
  styleUrls: ['./click-tristate-checkbox.component.scss'],
})
export class ClickTristateCheckboxComponent {

  public id: string;
  private valueInternal: ClickTristateCheckboxState;

  @Input() errorLabel: string;
  @Input() checkboxLabel: string;
  @Input() disabled: boolean = false;
  @Input()
  set value(value: number | boolean) {
    if (value === true) {
      this.valueInternal = ClickTristateCheckboxState.Checked;
    } else if (value === false) {
      this.valueInternal = ClickTristateCheckboxState.Unchecked;
    } else {
      this.valueInternal = value as ClickTristateCheckboxState;
    }
  }

  @Output()
  valueChanged: EventEmitter<ClickTristateCheckboxState> = new EventEmitter<ClickTristateCheckboxState>();

  constructor() {
    this.id = this.generateUniqueId();
    this.valueInternal = ClickTristateCheckboxState.Unchecked;
  }

  private generateUniqueId(): string {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }

  private calculateNextState(): ClickTristateCheckboxState {
    return this.isUnchecked ? ClickTristateCheckboxState.Checked : ClickTristateCheckboxState.Unchecked;
  }

  onCheckboxChange(): void {
    this.valueInternal = this.calculateNextState();
    this.valueChanged.emit(this.valueInternal);
  }

  get isMultiselected(): boolean {
    return this.valueInternal === ClickTristateCheckboxState.Intermediate;
  }

  get isUnchecked(): boolean {
    return this.valueInternal === ClickTristateCheckboxState.Unchecked;
  }
}
