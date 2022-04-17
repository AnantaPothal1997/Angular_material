import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
