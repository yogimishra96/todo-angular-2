import {  Component , OnInit } from '@angular/core';
import { StoreService, Todo} from './store.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component ({
   selector: 'app-root',
   templateUrl: 'app.component.html',
})


export class AppComponent implements OnInit{

  todoStore: StoreService;
  newTodoText = '';

  constructor(todoStore: StoreService) {
    this.todoStore = todoStore;
  }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
    }

    todo.title = editedTitle;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
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

  ngOnInit() {

    // this.todoStore.
    // for("let data of this.todoStore.todos; let i = index){
    //   console.log(data);
    // }

    // this.todoStore.todos.forEach(function(data)){
    //   console.log(data);
    //
    // }
  }



}


