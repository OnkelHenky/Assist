import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbRendererComponent } from './breadcrumb-renderer.component';

describe('BreadcrumbRendererComponent', () => {
  let component: BreadcrumbRendererComponent;
  let fixture: ComponentFixture<BreadcrumbRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
