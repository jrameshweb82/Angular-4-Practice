import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { HomeModule } from './home/home.module'; 
import { LoginpageModule } from './loginpage/loginpage.module';


const appRoutes: Routes = [
  //{ path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutusModule,
    ContactusModule,
    HomeModule,
    LoginpageModule,

    RouterModule.forRoot( appRoutes )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
