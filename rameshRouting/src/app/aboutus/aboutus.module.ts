import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponentComponent } from './about-component/about-component.component';
import { RouterModule, Routes } from '@angular/router'


const appRoutes: Routes = [
  { path: 'aboutus', component: AboutComponentComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( appRoutes )
  ],
  declarations: [ AboutComponentComponent]
})
export class AboutusModule { }
