import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MessageDialogComponent } from './message-dialog.component';
import { MessageDialogService } from './message-dialog.service';


@NgModule({
  declarations: [MessageDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    MessageDialogService,
  ],
  exports: [MessageDialogComponent],
  entryComponents: [MessageDialogComponent],
})
export class MeseageDialogModule { }
