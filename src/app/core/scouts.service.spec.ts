import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';

import { ScoutsService } from './scouts.service';
import { ReflectiveInjector } from "@angular/core";
import { Scout } from "app/core";

describe('ScoutsService', () => {
  let injector: ReflectiveInjector;
  let service: ScoutsService;

  beforeEach(() => {
    injector = ReflectiveInjector.resolveAndCreate([
      ScoutsService
    ]);

    service = injector.get(ScoutsService);
  });

  describe('getScouts$()', () => {
    let scout: Scout;

    beforeEach(() => {
      scout = {
        id: '1',
        firstName: 'Stephen',
        lastName: 'Done',
        rank: 'Eagle'
      };
    })

    it('should return an observable of the of the current scouts', async(() => {
      let scouts$ = service.getScouts$();

      scouts$.subscribe((scouts) => {
        expect(scouts).toEqual([]);
      });
    }));

    it('should emit a new array every time a new scout is created', fakeAsync(() => {
      let scouts$ = service.getScouts$();
      let scouts: Scout[];

      scouts$.subscribe((s) => {
        scouts = s;
      });

      tick();
      expect(scouts).toEqual([]);

      service.createScout(scout);

      tick();
      expect(scouts).toEqual([scout]);
    }));

    it('should emit a new array every time a scout is deleted', fakeAsync(() => {
      let scouts$ = service.getScouts$();
      let scouts: Scout[];
      scouts$.subscribe((s) => { scouts = s; });
      service.createScout(scout);

      service.deleteScout(scout.id);
      tick();

      expect(scouts).toEqual([]);
    }));

    it('should emit a new array every time a scout is updated', fakeAsync(() => {
      let scouts$ = service.getScouts$();
      let scouts: Scout[];
      let updatedScout: Scout;
      scouts$.subscribe((s) => { scouts = s; });
      service.createScout(scout);
      
      updatedScout = Object.assign({}, scout);
      updatedScout.firstName = 'Fred';

      service.updateScout(updatedScout);

      expect(scouts).toEqual([updatedScout]);
    }));

  })

});
