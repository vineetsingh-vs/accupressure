import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import {SharedModule} from '@shared/shared.module';
import {AuthRoutingModule} from '@app/auth/auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '@shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

const modules = [AuthRoutingModule,
  SharedModule];


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetComponent],
  imports: [
    ...modules,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
