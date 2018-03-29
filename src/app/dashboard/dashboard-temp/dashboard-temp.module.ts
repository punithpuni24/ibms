import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTempComponent } from '../dashboard-temp/dashboard-temp.component';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard-routing.module';
import { routes } from '../../app-routing.module';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from '../../dashboard/reports/reports.component';
const dashboardRoutes: Routes = [
  {path: '' , component: DashboardTempComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardTempComponent]
})
export class DashboardTempModule { }
