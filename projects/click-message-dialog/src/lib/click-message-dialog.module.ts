import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { ClickMessageDialogComponent } from './click-message-dialog.component';
import { ClickMessageDialogInternalComponent } from './click-message-dialog-internal.component';


@NgModule({
  declarations: [ClickMessageDialogComponent,ClickMessageDialogInternalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  exports: [ClickMessageDialogComponent],
  entryComponents: [ClickMessageDialogComponent,ClickMessageDialogInternalComponent],
})
export class ClickMeseageDialogModule { }
