import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { CustomerDashboardComponent } from './dashboard/dashboard.component';
import { CustomerMeetingComponent } from './meeting/meeting.component';
import { CustomerPaymentsComponent } from './payment/payments.component';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    ReportComponent,
    CustomerMeetingComponent,
    CustomerPaymentsComponent,
  ],
  imports: [
    NbCardModule,
    Ng2SmartTableModule,
    NbInputModule,
    CommonModule,
  ],
})

export class CustomerModule {}
