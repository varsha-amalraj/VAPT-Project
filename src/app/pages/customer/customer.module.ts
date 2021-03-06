import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReportComponent } from './report/report.component';
import { CustomerMeetingComponent } from './meeting/meeting.component';
import { CustomerOneClickPackageComponent } from './one-click-package/one-click-package.component';
import { CustomerCustomPackageComponent } from './custom-package/custom-package.component';
import { CustomerOneClickHomeComponent } from './one-click-home/one-click-home.component';
import { CustomerPaymentsComponent } from './payment/payments.component';
import { SummaryComponent } from './summary/summary.component';

import { ExportDirective } from 'app/directives/export.directive';

@NgModule({
  declarations: [
    ReportComponent,
    CustomerMeetingComponent,
    CustomerOneClickPackageComponent,
    CustomerCustomPackageComponent,
    CustomerOneClickHomeComponent,
    CustomerPaymentsComponent,
    ExportDirective,
    SummaryComponent,
  ],
  imports: [
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbInputModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
  ],
})
export class CustomerModule {}
