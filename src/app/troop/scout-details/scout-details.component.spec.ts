import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDetailsComponent } from './scout-details.component';
import { ScoutCardComponent } from "app/troop";
import { SharedModule } from "app/shared";
import { ScoutsService, Scout } from "app/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of as observableOf } from "rxjs/observable/of";
import { RouterTestingModule } from "@angular/router/testing";

describe('ScoutDetailsComponent', () => {
  let component: ScoutDetailsComponent;
  let fixture: ComponentFixture<ScoutDetailsComponent>;

  let ScoutsServiceMock: jasmine.Spy | any;
  let ActivatedRouteMock: jasmine.Spy | any;

  beforeEach(() => {
    ScoutsServiceMock = jasmine.createSpyObj('ScoutsService', ['getScouts$', 'getScout$']);
    ScoutsServiceMock.getScout$.and.returnValue(observableOf({}));
    ActivatedRouteMock = { params: observableOf([]) };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [
        ScoutDetailsComponent,
        ScoutCardComponent
      ],
      providers: [
        {provide: ScoutsService, useFactory: () => ScoutsServiceMock },
        {provide: ActivatedRoute, useFactory: () => ActivatedRouteMock }
      ]
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
