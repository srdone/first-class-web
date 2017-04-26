import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDialogComponent, ScoutDialogConfig } from './scout-dialog.component';
import { SharedModule } from "app/shared";
import { MD_DIALOG_DATA, MdDialogRef, MdButton } from "@angular/material";
import { By } from "@angular/platform-browser";

describe('ScoutDialogComponent', () => {
  let component: ScoutDialogComponent;
  let fixture: ComponentFixture<ScoutDialogComponent>;
  let data: ScoutDialogConfig;
  let mockDialogRef: MdDialogRef<ScoutDialogComponent>;

  beforeEach(() => {
    data = {
      scout: {
        id: '1',
        firstName: 'Stephen',
        lastName: 'Done',
        rank: 'Eagle'
      },
      isEdit: false
    };

    mockDialogRef = jasmine.createSpyObj('dialogRef', ['close']);
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ ScoutDialogComponent ],
      providers: [
        { provide: MD_DIALOG_DATA, useFactory: () => data },
        { provide: MdDialogRef, useFactory: () => mockDialogRef }
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

  it('should call close on the dialogRef when the save button is clicked', () => {
    let saveButton = fixture.debugElement.queryAll(By.directive(MdButton))[0];
    saveButton.triggerEventHandler('click', {});

    expect(mockDialogRef.close).toHaveBeenCalledWith(data.scout);
  });

  it('should update the value of the first name when a value is entered', () => {
    let firstNameInput = fixture.debugElement.queryAll(By.css('input'))[0];
    firstNameInput.triggerEventHandler('input', {target: {value: 'Fred'}});
    fixture.detectChanges();

    expect(data.scout.firstName).toEqual('Fred');
  });

});
