import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: 'inicio',
		loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'admin',
		loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
	},
	{
		path: 'usuarios',
		loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
	},
	{
		path: 'peliculas',
		loadChildren: () => import('./features/peliculas/peliculas.module').then((m) => m.PeliculasModule),
	},
	{
		path: 'reportes',
		loadChildren: () => import('./features/reportes/reportes.module').then((m) => m.ReportesModule),
	},
	{
		path: '**',
		redirectTo: '/admin/login',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
