import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() text1 ;
  @Output() itemClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickedOn(data){
    this.itemClicked.emit(data);
  }

}
