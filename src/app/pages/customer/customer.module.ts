import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { CustomerDashboardComponent } from './dashboard/dashboard.component';
import { CustomerMeetingComponent } from './meeting/meeting.component';
import { CustomerPaymentStatusComponent } from './payment/paymentStatus.component';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    ReportComponent,
    CustomerMeetingComponent,
    CustomerPaymentStatusComponent,
  ],
  imports: [
    NbCardModule,
    Ng2SmartTableModule,
    CommonModule,
  ],
})

export class CustomerModule {}
