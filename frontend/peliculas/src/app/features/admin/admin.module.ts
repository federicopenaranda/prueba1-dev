import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HelpInfoComponent } from './components/help-info/help-info.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { SuggestionService } from './services/suggestion.service';
import { LoginService } from './services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    HelpInfoComponent,
    SuggestionComponent
  ],
  providers: [
    LoginService,
    SuggestionService
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
