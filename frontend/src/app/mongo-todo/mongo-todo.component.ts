import { Component, OnInit } from '@angular/core';
import { MongoBackendService } from './mongo-backend.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-mongo-todo',
  templateUrl: './mongo-todo.component.html',
  styleUrls: ['./mongo-todo.component.css']
})
export class MongoTodoComponent implements OnInit {

  todoArray : any;
  newTodoText : string;
  constructor(private todos: MongoBackendService) {
    // console.log(MongoBackendService);
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.todos.getTodos().subscribe((data) => this.todoArray = data);
  }

  addTodo(){
    if(this.newTodoText.trim().length){
      // this.todos.addTodos({"title" : this.newTodoText})
      this.todos.addTodos({"title" : this.newTodoText,"completed" : false}).subscribe(todo => this.todoArray.push(todo));
    }
    this.getTodos();
  }

}
