import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormContorlComponent } from './form-contorl/form-contorl.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContorlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
