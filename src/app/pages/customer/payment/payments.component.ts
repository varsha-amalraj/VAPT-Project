import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-payment-status',
  templateUrl: './payments.component.html',
})

export class CustomerPaymentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  paymentDataURL: string = '../../../../assets/data/payments.json';
  paymentsData;

  ngOnInit(): void {
    this.http.get<any>(this.paymentDataURL).subscribe((data) => this.paymentsData = data);
  }
}
