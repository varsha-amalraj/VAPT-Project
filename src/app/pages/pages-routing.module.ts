import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { CustomerDashboardComponent } from './customer/dashboard/dashboard.component';
import { CustomerMeetingComponent } from './customer/meeting/meeting.component';
import { CustomerPaymentsComponent } from './customer/payment/payments.component';
import { ReportComponent } from './customer/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'customer/dashboard',
        component: CustomerDashboardComponent,
      },
      {
        path: 'customer/report',
        component: ReportComponent,
      },
      {
        path: 'customer/payments',
        component: CustomerPaymentsComponent,
      },
      {
        path: 'customer/meeting',
        component: CustomerMeetingComponent,
      },
      {
        path: '',
        redirectTo: 'customer/dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {}
