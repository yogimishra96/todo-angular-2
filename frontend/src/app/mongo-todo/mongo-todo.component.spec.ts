import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoTodoComponent } from './mongo-todo.component';

describe('MongoTodoComponent', () => {
  let component: MongoTodoComponent;
  let fixture: ComponentFixture<MongoTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
