import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbViewComponent } from './breadcrumb-view.component';

describe('BreadcrumbViewComponent', () => {
  let component: BreadcrumbViewComponent;
  let fixture: ComponentFixture<BreadcrumbViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
