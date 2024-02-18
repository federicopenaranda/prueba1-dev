import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './components/user-add/user-add.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
