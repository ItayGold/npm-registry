import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MessageDialogResponse, Response } from '../models/click-message-dialog-response.model';

@Component({
  selector: 'click-message-dialog',
  templateUrl: `
  <div class="message-dialog">
    <div class="message-dialog-header">
      <label class="message-dialog-header-label">{{ data.title }}</label>
    </div>
    <div class="message-dialog-body">
      <div [class]="'icon icon' + data.dialogType">
      </div>
      <label class="message-dialog-body-label">{{ data.message }}</label>
    </div>
    <div class="message-dialog-button">
      <button id="okBTN" class="btn_action ok-button" [mat-dialog-close]="save" (click)="onOkClick()">
        {{ data.okButtonString }}
      </button>
      <button *ngIf="data.buttonOptions" class="cancel-button" [mat-dialog-close]="onCancelClick"
        (click)="onCancelClick()">
        {{ data.cancelButtonString }}
      </button>
    </div>
  </div>
  `,
  styleUrls: [`
  .message-dialog {
    .message-dialog-header {
      height: 50px;
      background-color: #0073c1;
  
      .message-dialog-header-label {
        height: 24px;
        width: 300px;
        color: #ffffff;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 53px;
        padding-left: 30px;
      }
    }
    .message-dialog-body {
      padding-left: 30px;
      margin-top: 35px;
      height: 69px;
      display: flex;
  
      .message-dialog-body-label {
        height: 100%;
        width: 80%;
        color: #333333;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        align-self: center;
        white-space: pre-line;
        margin-left: 33px;
      }
  
      .icon {
        height: 60px;
        width: 60px;
        margin-left: -2px;
  
        &.icon0 {
          height: 58px;
          width: 64px;
          background-image: url("/ClickStudio/studio/images/message_dialog_warning.svg");
        }
  
        &.icon1 {
          background-image: url("/ClickStudio/studio/images/message_dialog_info.png");
        }
  
        &.icon2 {
          background-image: url("/ClickStudio/studio/images/message_dialog_error.svg"");
        }
      }
    }
  
    .message-dialog-button {
      float: right;
      margin-right: 30px;
      margin-top: 12px;
  
      .ok-button {
        height: 38px;
        width: 83px;
        border-radius: 2px;
        background-color: #0073c1;
        color: #ffffff;
        border: none;
      }
  
      .cancel-button {
        margin-left: 15px;
        height: 38px;
        width: 72px;
        border-radius: 2px;
        background-color: #ffffff;
        border: 1px solid #cbcbcb;
      }
    }
  }
  `],
})

export class ClickMessageDialogComponent implements OnInit {
  moduleStrings: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ClickMessageDialogComponent>) {
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



