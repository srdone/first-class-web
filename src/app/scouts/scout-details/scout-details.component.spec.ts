import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutDetailsComponent } from './scout-details.component';
import { SharedModule } from "app/shared";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of as observableOf } from "rxjs/observable/of";
import { RouterTestingModule } from "@angular/router/testing";
import { ScoutCardComponent } from "app/scouts/scout-card/scout-card.component";

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
