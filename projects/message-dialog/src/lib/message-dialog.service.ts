import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { refCount, publishLast } from 'rxjs/operators';

import { MessageDialogComponent } from './message-dialog.component';
import { MessageDialogData } from '../models/message-dialog-data.model'
import { MessageDialogResponse, Response } from '../models/message-dialog-response.model'


@Injectable()
export class MessageDialogService {

  constructor(public dialog: MatDialog) {
  }

  openMessageDialog(data: MessageDialogData): Observable<MessageDialogResponse> {

    const source = new Observable((observer) => {
      const dialogRef = this.dialog.open(MessageDialogComponent,
        {
          panelClass: 'dialog_style',
          data: data
        });
      dialogRef.afterClosed().subscribe(result => {

        if (result !== undefined) {

          observer.next(result.data);
        }
        observer.complete();
      });
    }).pipe(publishLast(), refCount());

    source.subscribe(() => { });

    return source;
  }

}