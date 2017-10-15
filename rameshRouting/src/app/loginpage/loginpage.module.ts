import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: 'login', component: LoginpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( appRoutes )
  ],
  declarations: [LoginpageComponent]
})
export class LoginpageModule { }
