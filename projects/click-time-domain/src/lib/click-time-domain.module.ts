import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxMaskModule } from 'ngx-mask';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ClickTimeDomainComponent } from './click-time-domain.component';
import { ClickTimeDomainModalComponent } from './click-time-domain-modal.component';
import { ClickDateRangeCalendarComponent } from './click-date-range-calendar.component';
import { ClickTristateCheckboxComponent } from '@click/tristate-checkbox';

@NgModule({
  declarations: [
    ClickDateRangeCalendarComponent,
    ClickTristateCheckboxComponent,
    ClickTimeDomainModalComponent,
    ClickTimeDomainComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  entryComponents: [
    ClickTimeDomainModalComponent
  ],
  exports: [
    ClickTimeDomainComponent,
  ],
})
export class ClickTimeDomainModule { }
