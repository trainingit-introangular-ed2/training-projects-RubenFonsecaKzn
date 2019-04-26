import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsServiceComponent } from './projects-service.component';

describe('ProjectsServiceComponent', () => {
  let component: ProjectsServiceComponent;
  let fixture: ComponentFixture<ProjectsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
