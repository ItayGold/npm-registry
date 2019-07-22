import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickTristateCheckboxState } from '../enums';

@Component({
  selector: 'click-tristate-checkbox-demo',
  templateUrl: './click-tristate-checkbox-demo.component.html',
  styleUrls: ['./click-tristate-checkbox-demo.component.scss'],
})
export class ClickTristateCheckboxDemoComponent {

  codes = [
    `<click-tristate-checkbox></click-tristate-checkbox>`,
    `<click-tristate-checkbox checkboxLabel="checkbox demo label"></click-tristate-checkbox>`,
    `<click-tristate-checkbox errorLabel="checkbox error label"></click-tristate-checkbox>`,
    `<click-tristate-checkbox [disabled]="true"></click-tristate-checkbox>`,
    `<click-tristate-checkbox [value]="1"></click-tristate-checkbox>`,
    `<click-tristate-checkbox [value]="2"></click-tristate-checkbox>`,
    `<click-tristate-checkbox (valueChanged)="onClickCheckbox($event)"></click-tristate-checkbox>`,
    ``,
  ];

  onClickCheckbox(event) {
    alert(`checkbox changed event: ${event}`);
    return false;
  }

}
