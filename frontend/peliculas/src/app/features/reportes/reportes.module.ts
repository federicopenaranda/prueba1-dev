import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { AddReportesComponent } from './components/add-reportes/add-reportes.component';
import { ListReportesComponent } from './components/list-reportes/list-reportes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddReportesComponent,
    ListReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule
  ]
})
export class ReportesModule { }
