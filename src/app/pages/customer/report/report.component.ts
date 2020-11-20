import { Component } from '@angular/core';
import { CustomerReportData } from 'app/@core/data/customer-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

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

  constructor(private service: CustomerReportData) {
    const data = this.service.getData();
    this.source.load(data);
  }

}