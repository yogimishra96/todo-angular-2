import {  Component , OnInit } from '@angular/core';
// import { StoreService, Todo} from './todo/store.service';

@Component ({
   selector: 'app-root',
   templateUrl: 'app.component.html',
})


export class AppComponent implements OnInit{

  constructor() {

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

  // getFoods() {
  //      this._demoService.getFoods().subscribe(
  //      data => { this.foods = data},
  //          err => console.error(err),
  //          () => console.log('done loading foods')
  //      );
  // }



}


