import { Component, OnInit } from '@angular/core';
import {
  MessageDialogData,
  DialogType,
  ButtonOptions,
} from '../models/click-message-dialog-data.model';
import { ClickMessageDialogService } from '../services/click-message-dialog.service';

/**
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/message-dialog</example-url>
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
  constructor(private messageDialogService: ClickMessageDialogService) {
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
    this.messageDialogService.openMessageDialog(this.errorDialogData);
  }

  onInfoClick(): any {
    this.messageDialogService.openMessageDialog(this.infoDialogData);
  }
  onWarningClick(): any {
    this.messageDialogService.openMessageDialog(this.warningDialogData);
  }
}
