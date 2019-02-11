import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFocusHomeComponent } from './daily-focus-home.component';

describe('DailyFocusHomeComponent', () => {
  let component: DailyFocusHomeComponent;
  let fixture: ComponentFixture<DailyFocusHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyFocusHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyFocusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
