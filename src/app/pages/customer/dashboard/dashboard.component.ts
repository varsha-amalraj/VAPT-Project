import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from '../../../../../node_modules/chart.js';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class CustomerDashboardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        // labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      }
    });
  }

  goToOneClickPackage() {
    this.router.navigateByUrl('/pages/customer/dashboard/one-click-home');
  }

  goToCustomPackage() {
    this.router.navigateByUrl('/pages/customer/dashboard/custom-package');
  }


}
