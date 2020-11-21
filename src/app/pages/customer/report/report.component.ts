import { Component, OnInit } from '@angular/core';
import { CustomerReportData } from 'app/@core/data/customer-table';
import { ExportService } from 'app/service/export.service';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit{
  customers: any = [];
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      sno: {
        title: 'SNo',
        type: 'number',
      },
      package: {
        title: 'Package',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      report: {
        title: 'Report',
        type: 'string',
      },
      meeting_schedule: {
        title: 'Meeting Schedule',
        type: 'string',
      },
      meeting_date: {
        title: 'Meeting Date&Time',
        type: 'string',
      },
      meeting_link: {
        title: 'Meeting Link',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  getReport = [];
  constructor(private service: CustomerReportData, private exportService: ExportService) {
    const data = this.service.getData();
    this.getReport = data;
    this.source.load(data);
  }

  ngOnInit() {
    for (let i = 0; i <= this.getReport.length; i++) {
      // console.log((this.getReport[i]).type);
      this.customers.push({SNo: (this.getReport[i]).sno,Package: (this.getReport[i]).package, Type: (this.getReport[i]).type, Report: (this.getReport[i]).report, "Meeting Schedule": (this.getReport[i]).meeting_schedule, "Meeting Date&Time": (this.getReport[i]).meeting_date, "Meeting Link": (this.getReport[i]).meeting_link});
    }
    // console.log((this.getReport));
  }

  export() {
    this.exportService.exportExcel(this.getReport, 'customers');
  }

}