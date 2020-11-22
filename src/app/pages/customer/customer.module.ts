import { NgModule } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { CustomerDashboardComponent } from './dashboard/dashboard.component';
import { CustomerMeetingComponent } from './meeting/meeting.component';
import { CustomerPaymentStatusComponent } from './payment/paymentStatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerOneClickPackageComponent } from './one-click-package/one-click-package.component';
import { CustomerCustomPackageComponent } from './custom-package/custom-package.component';
import { CustomerOneClickHomeComponent } from './one-click-home/one-click-home.component';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    ReportComponent,
    CustomerMeetingComponent,
    CustomerPaymentStatusComponent,
    CustomerOneClickPackageComponent,
    CustomerCustomPackageComponent,
    CustomerOneClickHomeComponent,
  ],
  imports: [
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
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
