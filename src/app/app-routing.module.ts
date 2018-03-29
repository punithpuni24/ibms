import {Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { dashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path : '', loadChildren: './login/login.module#LoginModule'},
  { path : 'dashboard', loadChildren: './dashboard/dashboard-temp/dashboard-temp.module#DashboardTempModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }