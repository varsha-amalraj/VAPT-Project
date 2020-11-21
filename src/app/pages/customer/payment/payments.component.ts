import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-payment-status',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})

export class CustomerPaymentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  paymentDataURL: string = '../../../../assets/data/payments.json';
  paymentsData;
  paymentsDataFilter;
  paymentsDataPagi;
  recordsPerPage = 10;
  page: number = 1;
  totalPages: number;
  isNext: boolean = false;
  isPrevious: boolean = false;

  ngOnInit(): void {
    this.http.get<any>(this.paymentDataURL).subscribe((data) => {
      this.paymentsData = data;
      this.paymentsDataFilter = data;
      this.paymentsDataPagi = data;
      this.updatePagination();
    });
  }

  search(event) {
    let searchText: string = event.target.value;
    searchText = searchText.toLowerCase();
    if (searchText.length) {
      this.paymentsDataFilter = this.paymentsData.filter((array) => {
        return (
          array.payment_id.toString().toLocaleLowerCase().includes(searchText) ||
          array.amount.toString().includes(searchText) ||
          array.date.includes(searchText) ||
          array.status.toLocaleLowerCase().includes(searchText)
        );
      });
      this.paymentsDataPagi = this.paymentsDataFilter;
    } else {
      this.paymentsDataFilter = this.paymentsData;
      this.paymentsDataPagi = this.paymentsData;
    }
    this.page = 1;
    this.updatePagination();
  }

  previous() {
    this.page -= 1;
    this.paymentsDataPagi = this.paymentsDataFilter.slice(this.page * this.recordsPerPage - this.recordsPerPage);
    this.updatePagination();
  }

  next() {
    this.page += 1;
    this.paymentsDataPagi = this.paymentsDataFilter.slice(this.page * this.recordsPerPage - this.recordsPerPage);
    this.updatePagination();
  }
  updatePagination() {
    this.totalPages = Math.ceil(this.paymentsDataFilter.length / this.recordsPerPage);
    this.isNext = this.page < this.totalPages;
    this.isPrevious = this.page !== 1;
  }
}
