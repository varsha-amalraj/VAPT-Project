import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ExportService } from 'app/service/export.service';


@Directive({
  selector: '[ngxExport]'
})
export class ExportDirective {

  constructor(private exportService: ExportService) { }
  @Input('ngxExport') customers: any[];
  @Input() fileName: string;

  @HostListener('click', ['$event']) onClick($event) {
    console.log('clicked: ' + $event);
    this.exportService.exportExcel(this.customers, this.fileName);
  }

}
