import { Component, OnInit } from '@angular/core';
import { Itab } from 'src/app/models/tap';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
selctedFramwork:string ='angular'
tabArr:Array<Itab>=[
  {
    Tabtitle: 'angular',
    TabContent:'<strong>Angular</strong><p></p>'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
