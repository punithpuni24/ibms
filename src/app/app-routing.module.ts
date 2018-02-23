import {Routes} from '@angular/router';
import { dashboardComponent }   from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: '/dashboard', component:dashboardComponent }
 
];
 

export class AppRoutingModule {}