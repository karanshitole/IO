import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() getMsg !:string;
 @Output() msgForParent :string='Yes I will work hard!!!'
 @Output() getMsgForchild : EventEmitter<string>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log('Comp is init !!!');
    this.getMsgForchild.emit(this.msgForParent)
    
  }

}
