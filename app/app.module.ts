import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice.component';
import * as CanvasJSAngularChart from './canvasjs.angular.component';
import { StackedArea100ChartComponent } from './stacked.area100.chart.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    GridModule,
    PDFExportModule,
  ],
  declarations: [
    AppComponent,
    InvoiceComponent,
    CanvasJSChart,
    StackedArea100ChartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
