import { Component, OnInit } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
// console.log(DragulaModule);

@Component({
  selector: 'app-like-trello',
  templateUrl: './like-trello.component.html',
  styleUrls: ['./like-trello.component.css']
})
export class LikeTrelloComponent implements OnInit {

  dragula:boolean = true;
  hello:string = 'hello';

  constructor() { }

  ngOnInit() {
  }

}
