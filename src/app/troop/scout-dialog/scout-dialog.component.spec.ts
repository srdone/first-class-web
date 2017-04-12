import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDialogComponent, ScoutDialogConfig } from './scout-dialog.component';
import { SharedModule } from "app/shared";
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";

describe('ScoutDialogComponent', () => {
  let component: ScoutDialogComponent;
  let fixture: ComponentFixture<ScoutDialogComponent>;
  let data: ScoutDialogConfig;

  beforeEach(async(() => {
    data = {
      scout: {
        id: '1',
        firstName: 'Stephen',
        lastName: 'Done',
        rank: 'Eagle'
      },
      isEdit: false
    };

    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ScoutDialogComponent ],
      providers: [
        { provide: MD_DIALOG_DATA, useFactory: () => data },
        { provide: MdDialogRef, useFactory: () => {} }
      ]
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
