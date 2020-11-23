import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
