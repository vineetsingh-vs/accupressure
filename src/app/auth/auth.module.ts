import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import {SharedModule} from '@shared/shared.module';
import {AuthRoutingModule} from '@app/auth/auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '@shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';

const modules = [AuthRoutingModule,
  SharedModule];


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetComponent, DetailComponent],
  imports: [
    ...modules,
    MatFormFieldModule,
    ReactiveFormsModule
    , CoreModule,
    CommonModule
  ]
})
export class AuthModule { }
