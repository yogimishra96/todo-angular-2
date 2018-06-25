import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeTrelloComponent } from './like-trello.component';

describe('LikeTrelloComponent', () => {
  let component: LikeTrelloComponent;
  let fixture: ComponentFixture<LikeTrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeTrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
