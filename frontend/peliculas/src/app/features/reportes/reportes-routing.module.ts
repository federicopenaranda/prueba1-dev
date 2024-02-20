import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./components/list-reportes/list-reportes.component').then((m) => m.ListReportesComponent),
  },
  {
      path: 'crear',
      loadChildren: () => import('./components/add-reportes/add-reportes.component').then((m) => m.AddReportesComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
