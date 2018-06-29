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
      let newtodo = {"title" : this.newTodoText,"completed" : false};
      this.todos.addTodos(newtodo).subscribe((data) => {
      //  console.log(data.statusCode);
        // if(data.statusCode == 200){
          this.todoArray.push(newtodo);
        // }
        },
        error => {
          console.log(error);
          // alert('Please insert correct indian mobile number !');
        });
    }

  }

}
