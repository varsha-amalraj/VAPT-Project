import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-one-click',
  templateUrl: './one-click-package.component.html',
  styleUrls: ['./one-click-package.component.scss'],
})
export class CustomerOneClickPackageComponent {


  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigateByUrl('/pages/customer/dashboard/one-click-home');
  }
}
