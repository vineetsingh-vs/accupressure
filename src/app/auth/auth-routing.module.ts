import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '@app/auth/login/login.component';
import {RegisterComponent} from '@app/auth/register/register.component';
import {ResetComponent} from '@app/auth/reset/reset.component';
import { DetailComponent } from '@app/auth/detail/detail.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'detail',
  //   component: DetailComponent
  // },
  {
    path: 'reset',
    component: ResetComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
