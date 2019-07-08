import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ClickTristateCheckboxState } from '../enums';

@Component({
  selector: 'click-tristate-checkbox',
  templateUrl: './click-tristate-checkbox.component.html',
  styleUrls: ['./click-tristate-checkbox.component.scss'],
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
