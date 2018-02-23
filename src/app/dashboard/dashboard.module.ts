import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { dashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';

@NgModule({
  declarations: [
    dashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [dashboardComponent]
})
export class dashboardModule { }
