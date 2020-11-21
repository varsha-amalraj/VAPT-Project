import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbInputModule, NbIconModule, NbDatepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReportComponent } from './report/report.component';
import { CustomerDashboardComponent } from './dashboard/dashboard.component';
import { CustomerMeetingComponent } from './meeting/meeting.component';
import { CustomerPaymentsComponent } from './payment/payments.component';
import { ExportDirective } from 'app/directives/export.directive';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    ReportComponent,
    CustomerMeetingComponent,
    CustomerPaymentsComponent,
    ExportDirective,
  ],
  imports: [
    NbCardModule,
    Ng2SmartTableModule,
    NbInputModule,
    CommonModule,
  ],
})

export class CustomerModule {}
