import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/models/todos';

@Component({
  selector: 'app-todosform',
  templateUrl: './todosform.component.html',
  styleUrls: ['./todosform.component.css']
})
export class TodosformComponent implements OnInit {
@Output() todosEmmiter : EventEmitter<Itodo>= new EventEmitter<Itodo>()
  constructor() { }

  ngOnInit(): void {
  }
  ontoAdd(todo:HTMLInputElement){
  if(todo.value.length>0){
    let todoObj : Itodo={
      todoItem:todo.value
    }
    console.log(todoObj);
    todo.value='';
    
    this.todosEmmiter.emit(todoObj)
  }
  }

}
