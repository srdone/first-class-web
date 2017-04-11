import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { from as observableFrom } from "rxjs/observable/from";

import "rxjs/add/operator/switchMap";
import { Scout } from "app/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ScoutsService {

  _scouts: Scout[] = [
      {id: '1', firstName: 'Stephen', lastName: 'Done', rank: 'Eagle'},
      {id: "2", firstName: 'Stephen', lastName: 'Done', rank: 'Eagle'},
      {id: "3", firstName: 'Stephen', lastName: 'Done', rank: 'Eagle'},
      {id: "4", firstName: 'Stephen', lastName: 'Done', rank: 'Eagle'},
      {id: "5", firstName: 'Stephen', lastName: 'Done', rank: 'Eagle'},
      {id: "6", firstName: 'Stephen', lastName: 'Done', rank: 'Eagle'},
      {id: "7", firstName: 'Fred', lastName: 'Flintstone', rank: 'First Class'}
  ];

  _scouts$ = new BehaviorSubject<Scout[]>(this._scouts);

  constructor() {
    this._scouts$.next(this._scouts);
  }

  getScouts$(): Observable<Array<Scout>> {
    return this._scouts$.asObservable();
  }

  getScout$(id: String): Observable<Scout> {
    return this._scouts$
      .switchMap(scouts => observableFrom(scouts))
      .filter(scout => scout.id === id);
  }

  createScout(scout: Scout) {
    scout.id = '' + (Math.max(...this._scouts.map(scout => +scout.id)) + 1);
    this._scouts = [...this._scouts, scout];
    this._scouts$.next(this._scouts);
  }

  updateScout(updatedScout: Scout) {
    this._scouts = this._scouts.map(scout => {
      if (updatedScout.id !== scout.id) {
        return scout;
      }
      return updatedScout;
    });
    this._scouts$.next(this._scouts);
  }

  deleteScout(id: String) {
    this._scouts = this._scouts.filter(scout => {
      console.log(scout, id);
      if (scout.id === id) {
        return false;
      }
      return true;
    });
    this._scouts$.next(this._scouts);
  }

}
