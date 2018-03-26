import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeControllerComponent } from './episode-controller.component';

describe('EpisodeControllerComponent', () => {
  let component: EpisodeControllerComponent;
  let fixture: ComponentFixture<EpisodeControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
