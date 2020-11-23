import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class CustomerDashboardComponent {
  constructor(private router: Router) {}

  goToOneClickPackage() {
    this.router.navigateByUrl('/pages/customer/dashboard/one-click-home');
  }

  goToCustomPackage() {
    this.router.navigateByUrl('/pages/customer/dashboard/custom-package');
  }
}
