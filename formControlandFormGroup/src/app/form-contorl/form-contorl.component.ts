import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-contorl',
  templateUrl: './form-contorl.component.html',
  styleUrls: ['./form-contorl.component.css']
})
export class FormContorlComponent implements OnInit {

  inputBind = new FormControl();
  inputListner = new FormControl();
  inputListerArray = [];
  constructor() { }

  ngOnInit() {
    this.inputListner.valueChanges.subscribe( (data)=>{
      this.receiveInputLister(data)
    } ); 
  }

  receiveInputLister(data){
    console.log(data);
    this.inputListerArray.push(data);
  }

}
