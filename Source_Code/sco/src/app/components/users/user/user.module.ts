import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmedEqualValidatorDirective } from '../signup/confirmed.directive';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/materials/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGurds } from '../../Guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGurds] }
];

@NgModule({
  declarations: [
    LoginComponent, SignupComponent, UserDashboardComponent, ConfirmedEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), FormsModule, MaterialModule, HttpClientModule
  ],
  exports: [RouterModule, CommonModule]
})
export class UserModule { }
