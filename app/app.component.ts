import { Component } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <button kendo-button  (click)="pdf.saveAs('invoice.pdf')">
      <span class="k-icon k-i-print"></span> Print
      </button>
    </div>

    <kendo-pdf-export #pdf  margin="2cm">
    <area-chart1></area-chart1>
      <h1 style="color:red;"> Hello Illuri </h1>
      <my-invoice [data]="data"></my-invoice>
      <div class="line-chart">
      <div class="aspect-ratio">
    <canvas id="chart"></canvas>
  </div>
</div>
      <h1 style="color:red;"> Hello Rajesh </h1>
    </kendo-pdf-export>
  `,
  styles: [
    `
    kendo-pdf-export {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      font-size: 12px;
    }
  `,
  ],
})
export class AppComponent {
  public data: InvoiceRow[] = invoiceData;
}
