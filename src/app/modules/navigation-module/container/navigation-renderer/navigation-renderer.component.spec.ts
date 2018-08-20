import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRendererComponent } from './navigation-renderer.component';

describe('NavigationRendererComponent', () => {
  let component: NavigationRendererComponent;
  let fixture: ComponentFixture<NavigationRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
