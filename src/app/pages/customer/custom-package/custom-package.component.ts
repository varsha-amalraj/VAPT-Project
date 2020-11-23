import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-custom',
  templateUrl: './custom-package.component.html',
  styleUrls: ['./custom-package.component.scss'],
})
export class CustomerCustomPackageComponent {
  isShown: boolean = false;
  isShowOthers: boolean = false;
  showCompliance: boolean = false;
  option: any;
  securityOption: any;
  options = [
    { value: 'This is value 1', label: 'Infrastructure VAPT' },
    { value: 'This is value 2', label: 'Application VAPT' },
    { value: 'This is value 3', label: 'Others' },
  ];
  securityOptions = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ];
  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigateByUrl('/pages/customer/dashboard');
  }

  onChangeReason(e) {
    if (e === 'OTHERS') {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
    if (e === 'COMPLIANCE') {
      this.showCompliance = true;
    } else {
      this.showCompliance = false;
    }
  }
  onChangeCompliance(e) {
    if (e === 'OTHERS') {
      this.isShowOthers = true;
    } else {
      this.isShowOthers = false;
    }
  }
}
