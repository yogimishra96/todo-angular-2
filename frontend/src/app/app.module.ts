///<reference path="app.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TrackMobileComponent } from './track-mobile/track-mobile.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { NumberDetails} from './todo/store.service';
import { LikeTrelloComponent } from './like-trello/like-trello.component';
import { DragulaModule } from 'ng2-dragula';
import { MongoTodoComponent } from './mongo-todo/mongo-todo.component';
import { LoginComponent } from './login/login.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


import 'hammerjs';


const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'track-mobile-cmp', component: TrackMobileComponent },
  { path: 'app-like-trello', component: LikeTrelloComponent },
  { path: 'app-mongo-todo', component: MongoTodoComponent },
  { path: 'app-login', component: LoginComponent}

];

@NgModule({
  declarations: [
    TrackMobileComponent,
    AppComponent,
    TodoComponent,
    LikeTrelloComponent,
    MongoTodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragulaModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: false } // <-- debugging purposes only
    ),
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [NumberDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
