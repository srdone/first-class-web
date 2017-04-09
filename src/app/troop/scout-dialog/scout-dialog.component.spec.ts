import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDialogComponent } from './scout-dialog.component';

describe('ScoutDialogComponent', () => {
  let component: ScoutDialogComponent;
  let fixture: ComponentFixture<ScoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
