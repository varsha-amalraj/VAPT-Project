import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ReportComponent } from './report/report.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerComponent, ReportComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
