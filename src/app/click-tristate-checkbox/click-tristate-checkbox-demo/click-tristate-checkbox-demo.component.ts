import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickTristateCheckboxState } from '../enums';
/**
 * click/icon's based on angular bootstrap library
 * ngx-bootstrap
 * for date range picker use another component
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/tristate-checkbox</example-url>
 */
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
    window.alert(`checkbox changed event: ${event}`);
    return false;
  }

}
