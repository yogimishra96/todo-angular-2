import { Component, OnInit } from '@angular/core';
import {StoreService, Todo} from './store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  ngOnInit() {
   // console.log(this.todoStore.todos);
  }
  todoStore: StoreService;
  newTodoText = '';

  constructor(todoStore: StoreService) {
    this.todoStore = todoStore;
  }

  toggleCompletion(todo: Todo) {
    // console.log(this.todoStore.todos);
    this.todoStore.toggleCompletion(todo);
  }

  remove(todo: Todo){
    this.todoStore.remove(todo);
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
    }
  }

  showCompleted(){
    this.todoStore.getCompleted();
    // console.log(this.todoStore);
  }

  showNotDone(){
    this.todoStore.getRemaining();
  }

  showAllTodos(){
    this.todoStore.getDataFromLocalStorage();
  }

}
