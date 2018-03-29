import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComponent } from './login.component';
import { RouterModule , Routes } from '@angular/router';

const loginRoutes: Routes = [
  {path: '' , component: loginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [loginComponent]
})
export class LoginModule { }
