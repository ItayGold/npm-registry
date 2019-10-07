import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { ClickMessageDialogComponent } from './click-message-dialog.component';
import { MessageDialogService } from './click-message-dialog.service';


@NgModule({
  declarations: [ClickMessageDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    MessageDialogService,
  ],
  exports: [ClickMessageDialogComponent],
  entryComponents: [ClickMessageDialogComponent],
})
export class ClickMeseageDialogModule { }
