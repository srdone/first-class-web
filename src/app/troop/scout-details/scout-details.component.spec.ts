import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDetailsComponent } from './scout-details.component';

describe('ScoutDetailsComponent', () => {
  let component: ScoutDetailsComponent;
  let fixture: ComponentFixture<ScoutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
