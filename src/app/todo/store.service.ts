import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class NumberDetails {

  mobile: number;

  constructor(private http: HttpClient) { }

  getDetails() {
    if (this.mobile) {

      return this.http.get('https://numspy.pythonanywhere.com/LocateMobile/' + this.mobile) .pipe(
        map(res => res) // or any other operator
      );
    }
  }

}

export class Todo {
  completed: Boolean;
  editing: Boolean;
  title: String;

  // get title() {
  //   return this._title;
  // }
  // set title(value: String) {
  //   this._title = value.trim();
  // }

  constructor(title: String) {
    this.completed = false;
    this.editing = false;
    this.title = title.trim();
  }
}

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  todos: Array<Todo>;

  constructor() {
    this.getDataFromLocalStorage();
  }

  getDataFromLocalStorage(){
    const persistedTodos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
    this.todos = persistedTodos;

    // console.log(persistedTodos);
    // Normalize back into classes
    // console.log(persistedTodos);
    // this.todos = persistedTodos.map( (todo) => {
    //   const ret = new Todo(todo.title);
    //   ret.completed = todo.completed;
    //   console.log(ret);
    //   return ret;
    // });
  }

  private updateStore() {
    localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
  }

  private getWithCompleted(completed: Boolean) {
    // console.log(this.todos);
    this.getDataFromLocalStorage();
    this.todos = this.todos.filter((todo) => todo.completed === completed);
    return this.todos;
  }

  // allCompleted() {
  //   return this.todos.length === this.getCompleted().length;
  // }
  //
  // setAllTo(completed: Boolean) {
  //   this.todos.forEach((t: Todo) => t.completed = completed);
  //   this.updateStore();
  // }
  //
  // removeCompleted() {
  //   this.todos = this.getWithCompleted(false);
  //   this.updateStore();
  // }

  getRemaining() {
    return this.getWithCompleted(false);
  }

  getCompleted() {
    // console.log('here');
    return this.getWithCompleted(true);
  }

  toggleCompletion(todo) {
    // console.log('herer');
    todo.completed = !todo.completed;
    this.updateStore();
    // this.getDataFromLocalStorage();
  }

  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }

  add(title: String) {

    new Todo(title);
    this.todos.push(new Todo(title));
    this.updateStore();
  }
}
