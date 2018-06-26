import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMobileComponent } from './track-mobile.component';

describe('TrackMobileComponent', () => {
  let component: TrackMobileComponent;
  let fixture: ComponentFixture<TrackMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
