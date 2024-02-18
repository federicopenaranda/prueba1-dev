import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { SuggestionComponent } from "./components/suggestion/suggestion.component";
import { HelpInfoComponent } from "./components/help-info/help-info.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'sugerencia',
        component: SuggestionComponent,
    },
    {
        path: 'help-info',
        component: HelpInfoComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }