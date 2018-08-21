import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompetitionDashboardComponent } from './my-competition-dashboard.component';

describe('MyCompetitionDashboardComponent', () => {
  let component: MyCompetitionDashboardComponent;
  let fixture: ComponentFixture<MyCompetitionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompetitionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompetitionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
