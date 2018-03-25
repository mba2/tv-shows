import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabControllerComponent } from './tab-controller.component';

describe('TabControllerComponent', () => {
  let component: TabControllerComponent;
  let fixture: ComponentFixture<TabControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
