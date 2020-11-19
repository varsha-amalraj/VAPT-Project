import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [{
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'report',
        component: ReportComponent,
      },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CustomerRoutingModule {
  }