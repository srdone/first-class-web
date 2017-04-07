import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutCardComponent } from './scout-card.component';

describe('ScoutCardComponent', () => {
  let component: ScoutCardComponent;
  let fixture: ComponentFixture<ScoutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
