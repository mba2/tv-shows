import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderTvShowComponent } from './loader-tv-show.component';

describe('LoaderTvShowComponent', () => {
  let component: LoaderTvShowComponent;
  let fixture: ComponentFixture<LoaderTvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderTvShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
