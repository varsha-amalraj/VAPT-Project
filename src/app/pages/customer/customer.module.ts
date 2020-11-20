import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ReportComponent } from './report/report.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerComponent, ReportComponent],
  imports: [
    NbCardModule,
    Ng2SmartTableModule,
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
