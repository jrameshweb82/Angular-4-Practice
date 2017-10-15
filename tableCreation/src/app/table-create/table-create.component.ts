import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.css']
})
export class TableCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tableData=[{code:1,
              Name:"Ramesh",
              sex:"male",
              cell:8870233276,
              Age:35
            },
            {code:2,
              Name:"Siva",
              sex:"male",
              cell:9870233276,
              Age:30
            },
            {code:3,
              Name:"Ishwarya",
              sex:"female",
              cell:7570233276,
              Age:33
            },
            {code:4,
              Name:"IshwaryaRai",
              sex:"female",
              cell:7570233276,
              Age:36
            }
          ];

  tableHead=[{
              title:"Code",
              mappingKey:"code"
              },
            {
              title:"name",
              mappingKey:"Name"
            },
            {
              title:"Male",
              mappingKey:"sex"
              },
            {
              title:"Cell",
              mappingKey:"cell"
            },
            {
              title:"age",
              mappingKey:"Age"
            }
            ];
            
}
