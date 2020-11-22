import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-one-click-home',
  templateUrl: './one-click-home.component.html',
  styleUrls: ['./one-click-home.component.scss'],
})
export class CustomerOneClickHomeComponent {
  form: FormGroup;
  isShown: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({});
  }

  onCheckboxChange(e) {
    this.isShown = !this.isShown;
  }

  navigateNext() {
    this.router.navigateByUrl('/pages/customer/dashboard/one-click');
  }
  navigateBack() {
    this.router.navigateByUrl('/pages/customer/dashboard');
  }
}
