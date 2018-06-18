///<reference path="app.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TrackMobileComponent } from './track-mobile/track-mobile.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import {NumberDetails} from './todo/store.service';

const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'track-mobile-cmp', component: TrackMobileComponent }
];

@NgModule({
  declarations: [
    TrackMobileComponent,
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [NumberDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
