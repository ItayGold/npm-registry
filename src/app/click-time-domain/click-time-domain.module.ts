import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxMaskModule } from 'ngx-mask';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ClickTimeDomainComponent } from './click-time-domain/click-time-domain.component';
import { ClickTimeDomainDemoComponent } from './click-time-domain-demo/click-time-domain-demo.component';
import { ClickTimeDomainModalComponent } from './click-time-domain-modal/click-time-domain-modal.component';
import { ClickDateRangeCalendarComponent } from './click-date-range-calendar/click-date-range-calendar.component';

import { ClickTimeDomainRoutingModule } from './click-time-domain-routing.module';
import { ClickTristateCheckboxModule } from '../click-tristate-checkbox/click-tristate-checkbox.module';

@NgModule({
  declarations: [
    ClickDateRangeCalendarComponent,
    ClickTimeDomainModalComponent,
    ClickTimeDomainDemoComponent,
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
    ClickTimeDomainRoutingModule,
    ClickTristateCheckboxModule,
  ],
  exports: [
    ClickTimeDomainComponent,
  ],
  entryComponents: [
    ClickTimeDomainModalComponent
  ],
})
export class ClickTimeDomainModule { }
