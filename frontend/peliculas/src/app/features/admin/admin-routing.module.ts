import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { SuggestionComponent } from "./components/suggestion/suggestion.component";
import { HelpInfoComponent } from "./components/help-info/help-info.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'login',
        loadChildren: () => import('./components/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'sugerencia',
        loadChildren: () => import('./components/suggestion/suggestion.component').then((m) => m.SuggestionComponent),
    },
    {
        path: 'help-info',
        loadChildren: () => import('./components/help-info/help-info.component').then((m) => m.HelpInfoComponent),
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }