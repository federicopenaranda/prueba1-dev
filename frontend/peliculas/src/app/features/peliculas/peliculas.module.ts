import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { AddPeliculasComponent } from './components/add-peliculas/add-peliculas.component';
import { ListPeliculasComponent } from './components/list-peliculas/list-peliculas.component';


@NgModule({
  declarations: [
    AddPeliculasComponent,
    ListPeliculasComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
