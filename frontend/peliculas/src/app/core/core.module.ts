import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    LoaderComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
		BrowserAnimationsModule,
		RouterModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatTooltipModule,
		MatDialogModule,
		MatProgressSpinnerModule,
		MatMenuModule,
		HttpClientModule,
  ],
  exports: [
    LoaderComponent,
    FooterComponent,
    MenuComponent,
    ToolbarComponent,
    MainLayoutComponent,
  ]
})
export class CoreModule { }
