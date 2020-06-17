import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllVideosComponent } from './show-all-videos.component';

describe('ShowAllVideosComponent', () => {
  let component: ShowAllVideosComponent;
  let fixture: ComponentFixture<ShowAllVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
