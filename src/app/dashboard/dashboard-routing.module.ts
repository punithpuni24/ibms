import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

export const dashboardroutes: Routes = [
  { path : '', loadChildren: './dashboard/dashboard-temp/dashboard-temp.module#DashboardTempModule'},
  { path : 'reports', loadChildren: './dashboard/reports/reports.module#ReportsModule'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(dashboardroutes)
  ],
  declarations: []
})
export class DashboardRoutingModule { }
