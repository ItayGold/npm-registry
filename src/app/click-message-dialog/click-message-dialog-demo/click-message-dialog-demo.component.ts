import { Component, OnInit } from '@angular/core';
import {
  MessageDialogData,
  DialogType,
  ButtonOptions,
} from '../models/click-message-dialog-data.model';

/**
 * @example
 * <example-url>https://npm-demo.goup.tech/message-dialog</example-url>
 */
@Component({
  selector: 'app-message-dialog-demo',
  templateUrl: './click-message-dialog-demo.component.html',
  styleUrls: ['./click-message-dialog-demo.component.scss'],
})
export class ClickMessageDialogDemoComponent implements OnInit {
  private errorDialogData = new MessageDialogData();
  private infoDialogData = new MessageDialogData();
  private warningDialogData = new MessageDialogData();
  data = new MessageDialogData();
  isOpen: boolean;
  width: string;
  height: string;

  constructor() {
    this.errorDialogData.title = 'Error';
    this.errorDialogData.okButtonString = 'Goy it';
    this.errorDialogData.cancelButtonString = 'Cancel';
    this.errorDialogData.message = `Analytics hasn't been set up yet.
    Please follow the setup instructions as described in the documentation.`;
    this.errorDialogData.dialogType = DialogType.error;
    this.errorDialogData.buttonOptions = ButtonOptions.ok;

    this.infoDialogData.title = 'Notic';
    this.infoDialogData.okButtonString = 'Apply';
    this.infoDialogData.cancelButtonString = 'Cancel';
    this.infoDialogData.message = `Analytics hasn't been set up yet.
    Please follow the setup instructions as described in the documentation.`;
    this.infoDialogData.dialogType = DialogType.info;
    this.infoDialogData.buttonOptions = ButtonOptions.okCancel;

    this.warningDialogData.title = 'Warning';
    this.warningDialogData.okButtonString = 'Apply';
    this.warningDialogData.cancelButtonString = 'Cancel';
    this.warningDialogData.message = `Analytics hasn't been set up yet.
    Please follow the setup instructions as described in the documentation.`;
    this.warningDialogData.dialogType = DialogType.warning;
    this.warningDialogData.buttonOptions = ButtonOptions.okCancel;
  }

  ngOnInit() {}

  onErrorClick(): any {
    this.isOpen = true;
    this.data = this.errorDialogData;
    this.width = '550px';
    this.height = '235px';
  }

  onInfoClick(): any {
    this.isOpen = true;
    this.data = this.infoDialogData;
    this.width = '550px';
    this.height = '235px';
  }
  onWarningClick(): any {
    this.isOpen = true;
    this.data = this.infoDialogData;
    this.width = '550px';
    this.height = '235px';
  }

  onCancelClick(): any {
    console.log('onCancelClick');
  }

  onOkClick(): any {
    console.log('onOKClick');
  }
}
