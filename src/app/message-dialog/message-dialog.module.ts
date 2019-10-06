import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MeseageDialogDemoRoutingModule } from './message-dialog-routing.module';
import { MeseageDialogDemoComponent } from './message-dialog-demo/message-dialog-demo.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MessageDialogService } from './services/message-dialog.service';


@NgModule({
  declarations: [MessageDialogComponent, MeseageDialogDemoComponent],
  imports: [
    CommonModule,
    MeseageDialogDemoRoutingModule,
    MatDialogModule
  ],
  providers: [
    MessageDialogService,
  ],
  exports: [MessageDialogComponent, MeseageDialogDemoComponent],
  entryComponents: [MessageDialogComponent],
})
export class MeseageDialogDemoModule { }
