import { Component, Inject, OnInit, Input, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  MessageDialogResponse,
  Response,
} from '../models/click-message-dialog-response.model';

/**
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/message-dialog</example-url>
 */
@Component({
  selector: 'click-message-dialog-internal',
  templateUrl: './click-message-dialog-internal.component.html',
  styleUrls: ['./click-message-dialog-internal.component.scss'],
})
export class ClickMessageDialogInternalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ClickMessageDialogInternalComponent>
  ) {}

  ngOnInit() {
    this.dialogRef.updateSize(this.data.width , this.data.height);
    this.dialogRef.backdropClick();
    this.dialogRef.disableClose = true;
  }

  onCancelClick() {
    this.dialogRef.close(new MessageDialogResponse(Response.cancel));
  }

  onOkClick() {
    this.dialogRef.close(new MessageDialogResponse(Response.ok));
  }
}
