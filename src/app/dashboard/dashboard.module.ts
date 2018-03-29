import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { dashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



const dashboardRoutes: Routes = [{
  path: '', component: dashboardComponent
}];

@NgModule({
  declarations: [
    dashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [],
  bootstrap: [dashboardComponent]
})
export class DashboardModule { }
