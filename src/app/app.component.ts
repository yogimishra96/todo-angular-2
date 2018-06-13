import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component ({
   selector: 'app-root',
   templateUrl: 'app.component.html',
})

export class AppComponent  {
  todoData: any[] = [];

  newTodoText : string = '';

  addTodo(){
    // this.inputdata = todo;
    console.log(this.newTodoText);
  }

}


