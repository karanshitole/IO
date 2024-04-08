import { Component, OnInit } from '@angular/core';
import { Itodo } from './models/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'io';
  msgForchild:string='work hard, party Hard'
 todosArray:Array<Itodo>=[
  {
    todoItem:"javascript"
  }
]
constructor(){

}

ngOnInit(): void {
  
}
  ongettingMsg(data:any){
    console.log(data)
  }
  onTodoAdd(todo:HTMLInputElement){
    let todoObj={
      todoItem :todo.value
    }
    todo.value=''
    this.todosArray.push(todoObj)
  }
  getTodoItem(data:any){
    console.log(data)
    this.todosArray.push(data)
  }
}
