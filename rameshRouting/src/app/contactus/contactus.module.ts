import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { OthercityComponent } from './othercity/othercity.component'

const appRoutes: Routes = [
  { path: 'contactus', 
    component: ContactusComponent, 
    children: [
      { path: 'bangalore', component: BangaloreComponent },
      { path: 'chennai', component: ChennaiComponent },
      { path: 'other/:city', component: OthercityComponent }
    ]
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( appRoutes )
  ],
  declarations: [ContactusComponent, BangaloreComponent, ChennaiComponent, OthercityComponent]
})
export class ContactusModule { }
