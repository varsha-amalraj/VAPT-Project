import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { CustomerDashboardComponent } from './customer/dashboard/dashboard.component';
import { CustomerMeetingComponent } from './customer/meeting/meeting.component';
import { CustomerPaymentStatusComponent } from './customer/payment/paymentStatus.component';
import { ReportComponent } from './customer/report/report.component';
import { CustomerOneClickPackageComponent } from './customer/one-click-package/one-click-package.component';
import { CustomerOneClickHomeComponent } from './customer/one-click-home/one-click-home.component';
import { CustomerCustomPackageComponent } from './customer/custom-package/custom-package.component';

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
        path: 'customer/payment',
        component: CustomerPaymentStatusComponent,
      },
      {
        path: 'customer/meeting',
        component: CustomerMeetingComponent,
      },
      {
        path: 'customer/dashboard/one-click-home',
        component: CustomerOneClickHomeComponent,
      },
      {
        path: 'customer/dashboard/one-click',
        component: CustomerOneClickPackageComponent,
      },
      {
        path: 'customer/dashboard/custom-package',
        component: CustomerCustomPackageComponent,
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
