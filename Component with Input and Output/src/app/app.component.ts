import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   inp1 = [
     'siva',
     'giri',
     'ramesh',
     'karthi'
   ]

   fromChild;
   receive(data){
    this.fromChild = data;
   }
}
