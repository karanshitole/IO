import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todos';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 @Input() getTodos !:Array<Itodo>
  constructor() { }

  ngOnInit(): void {
  }

}
