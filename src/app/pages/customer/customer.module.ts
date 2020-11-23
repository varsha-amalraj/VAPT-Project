import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { CustomerMeetingComponent } from './meeting/meeting.component';
import { CustomerPaymentsComponent } from './payment/payments.component';
import { ExportDirective } from 'app/directives/export.directive';

@NgModule({
  declarations: [
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
