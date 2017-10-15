import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-developer',
  templateUrl: './angular-developer.component.html',
  styleUrls: ['./angular-developer.component.css']
})
export class AngularDeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  AngularList:boolean=false;
  AngularPerson:string[] = ["Siva","Ramesh","Karthi","Naveen"];
  BestAngular:string = "Siva";
  

}
