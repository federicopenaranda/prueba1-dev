import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./components/list-peliculas/list-peliculas.component').then((m) => m.ListPeliculasComponent),
  },
  {
      path: 'crear',
      loadChildren: () => import('./components/add-peliculas/add-peliculas.component').then((m) => m.AddPeliculasComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
