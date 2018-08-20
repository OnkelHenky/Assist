import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsDashboardComponent } from './competitions-dashboard.component';

describe('CompetitionsDashboardComponent', () => {
  let component: CompetitionsDashboardComponent;
  let fixture: ComponentFixture<CompetitionsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
