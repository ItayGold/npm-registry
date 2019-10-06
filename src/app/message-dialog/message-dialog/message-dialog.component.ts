import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageDialogResponse, Response } from '../models/message-dialog-response.model'
@Component({
  selector: 'message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
})

export class MessageDialogComponent implements OnInit {
  moduleStrings: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MessageDialogComponent>) {
  }

  ngOnInit() {
    this.dialogRef.updateSize('550px', '235px');
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



