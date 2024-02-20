import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./components/user-list/user-list.component').then((m) => m.UserListComponent),
  },
  {
      path: 'crear',
      loadChildren: () => import('./components/user-add/user-add.component').then((m) => m.UserAddComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
