import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { dashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

const dashboardRoutes: Routes = [
  { path: '', component: dashboardComponent},
  { path:'reports', component: ReportsComponent },
];

@NgModule({
  declarations: [
    dashboardComponent 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [],
  bootstrap: [dashboardComponent]
})
export class DashboardModule { }
