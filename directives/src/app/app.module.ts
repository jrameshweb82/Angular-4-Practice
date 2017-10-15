import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularDeveloperComponent } from './angular-developer/angular-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularDeveloperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
