import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDeashboardComponent } from './teams-deashboard.component';

describe('TeamsDeashboardComponent', () => {
  let component: TeamsDeashboardComponent;
  let fixture: ComponentFixture<TeamsDeashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsDeashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsDeashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
