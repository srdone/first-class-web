import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoutsService, Scout } from "app/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";

import "rxjs/add/operator/switchMap";
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { ScoutDialogComponent } from "app/troop/scout-dialog/scout-dialog.component";

@Component({
  selector: 'fc-scout-details',
  templateUrl: './scout-details.component.html',
  styleUrls: ['./scout-details.component.scss']
})
export class ScoutDetailsComponent implements OnInit, OnDestroy {

  scout: Scout;

  _scoutSubscription: Subscription;

  constructor(
    private scoutsService: ScoutsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this._scoutSubscription = this.activatedRoute
      .params
      .switchMap(params => this.scoutsService.getScout$(params.id))
      .subscribe(scout => this.scout = scout);
  }

  ngOnDestroy() {
    this._scoutSubscription.unsubscribe();
  }

  deleteScout(scout: Scout) {
    this.scoutsService.deleteScout(scout.id);
    this.router.navigate(['/scouts']);
  }

  editScout(scout: Scout) {
    let config: MdDialogConfig
    this.dialog.open(ScoutDialogComponent, {
      data: {
        scout: Object.assign({}, scout),
        isEdit: true
      }
    });
  }

}
