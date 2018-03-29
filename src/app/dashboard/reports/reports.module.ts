import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { Routes,RouterModule } from '@angular/router';
const reportRoutes: Routes = [
  {path: '' , component: ReportsComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reportRoutes)
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
