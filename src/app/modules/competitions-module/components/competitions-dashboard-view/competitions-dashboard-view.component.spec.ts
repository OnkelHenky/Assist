import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsDashboardViewComponent } from './competitions-dashboard-view.component';

describe('CompetitionsDashboardViewComponent', () => {
  let component: CompetitionsDashboardViewComponent;
  let fixture: ComponentFixture<CompetitionsDashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsDashboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
