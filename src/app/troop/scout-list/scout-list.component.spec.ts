import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutListComponent } from './scout-list.component';
import { SharedModule } from "app/shared";
import { ScoutCardComponent } from "app/troop";
import { Injectable } from "@angular/core";
import { ScoutsService } from "app/core";
import { RouterTestingModule } from "@angular/router/testing";

describe('ScoutListComponent', () => {
  let component: ScoutListComponent;
  let fixture: ComponentFixture<ScoutListComponent>;

  let ScoutServiceMock: jasmine.Spy;

  beforeEach(() => {
    ScoutServiceMock = jasmine.createSpyObj('ScoutsService', ['getScouts$', 'getScout$']);
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        ScoutListComponent,
        ScoutCardComponent
      ],
      providers: [
        {provide: ScoutsService, useFactory: () => ScoutServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
