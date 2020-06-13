import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetResultsComponent } from './internet-results.component';

describe('InternetResultsComponent', () => {
  let component: InternetResultsComponent;
  let fixture: ComponentFixture<InternetResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
