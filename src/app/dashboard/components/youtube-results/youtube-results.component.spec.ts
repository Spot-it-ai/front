import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeResultsComponent } from './youtube-results.component';

describe('YoutubeResultsComponent', () => {
  let component: YoutubeResultsComponent;
  let fixture: ComponentFixture<YoutubeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
