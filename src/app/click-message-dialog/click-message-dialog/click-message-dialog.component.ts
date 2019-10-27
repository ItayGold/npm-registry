
import { OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Component, Input } from '@angular/core';

import { ClickMessageDialogInternalComponent } from '../click-message-dialog-internal/click-message-dialog-internal.component';
import { Response } from '../models/click-message-dialog-response.model';

export enum DialogType {
  warning,
  info,
  error
}
export enum ButtonOptions {
  ok,
  okCancel
}

/**
 * @example
 * <example-url>http://npm-docs-demo.s3-website.eu-central-1.amazonaws.com/message-dialog</example-url>
 */
@Component({
  selector: 'click-message-dialog',
  templateUrl: './click-message-dialog.component.html',
  styleUrls: ['./click-message-dialog.component.scss'],
})

export class ClickMessageDialogComponent implements OnChanges {

  moduleStrings: any = {};

  @Input() save: any;
  @Input() height: '235px';
  @Input() width: '550px';
  @Input() title: string;
  @Input() message: string;
  @Input() dialogType: DialogType;
  @Input() okButtonString: string;
  @Input() cancelButtonString: string;
  @Input() buttonOptions = ButtonOptions.ok;
  @Input() isOpen = false;

  @Output() cancelClick = new EventEmitter<boolean>();
  @Output() okClick = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen && changes.isOpen.currentValue) {
      this.openMessageDialog();
    }
  }

  constructor(public dialog: MatDialog) {
  };

  openMessageDialog() {
    
    const data = {
      title: this.title,
      message: this.message,
      dialogType: this.dialogType,
      okButtonString: this.okButtonString,
      cancelButtonString: this.cancelButtonString,
      buttonOptions: this.buttonOptions,
      width: this.width,
      height: this.height,
      save: this.save
    };

    const dialogRef = this.dialog.open(ClickMessageDialogInternalComponent,
      {
        panelClass: 'dialog_style',
        data
      });

    dialogRef.afterClosed().subscribe(result => {
      this.isOpen = false;

      if (!result.data) {
        return;
      }

      if (Response[result.data] === 'cancel') {
        this.cancelClick.emit();
        return;
      }

      this.okClick.emit();

    });
  };
}

