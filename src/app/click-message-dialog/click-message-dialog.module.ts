import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MeseageDialogDemoRoutingModule } from './click-message-dialog-routing.module';
import { ClickMeseageDialogDemoComponent } from './click-message-dialog-demo/click-message-dialog-demo.component';
import { ClickMessageDialogComponent } from './click-message-dialog/click-message-dialog.component';
import { ClickMessageDialogService } from './services/click-message-dialog.service';


@NgModule({
  declarations: [ClickMessageDialogComponent, ClickMeseageDialogDemoComponent],
  imports: [
    CommonModule,
    MeseageDialogDemoRoutingModule,
    MatDialogModule
  ],
  providers: [
    ClickMessageDialogService,
  ],
  exports: [ClickMessageDialogComponent, ClickMeseageDialogDemoComponent],
  entryComponents: [ClickMessageDialogComponent],
})
export class ClickMeseageDialogDemoModule { }
