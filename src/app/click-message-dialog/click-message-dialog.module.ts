import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ClickMessageDialogDemoRoutingModule } from './click-message-dialog-routing.module';
import { ClickMessageDialogDemoComponent } from './click-message-dialog-demo/click-message-dialog-demo.component';
import { ClickMessageDialogComponent } from './click-message-dialog/click-message-dialog.component';
import { ClickMessageDialogInternalComponent } from './click-message-dialog-internal/click-message-dialog-internal.component';
import { ClickMessageDialogService } from './services/click-message-dialog.service';

@NgModule({
  declarations: [ClickMessageDialogComponent, ClickMessageDialogDemoComponent,ClickMessageDialogInternalComponent],
  imports: [CommonModule, ClickMessageDialogDemoRoutingModule, MatDialogModule],
  providers: [ClickMessageDialogService],
  exports: [ClickMessageDialogComponent, ClickMessageDialogDemoComponent,ClickMessageDialogInternalComponent],
  entryComponents: [ClickMessageDialogComponent,ClickMessageDialogInternalComponent],
})
export class ClickMeseageDialogDemoModule {}
