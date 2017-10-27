import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserRepoComponent } from './github-user-repo.component';

describe('GithubUserRepoComponent', () => {
  let component: GithubUserRepoComponent;
  let fixture: ComponentFixture<GithubUserRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
