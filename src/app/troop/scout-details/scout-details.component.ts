import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";

import "@ngrx/core/add/operator/select";
import "rxjs/add/operator/switchMap";
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { ScoutDialogComponent } from "app/troop/scout-dialog/scout-dialog.component";
import { Scout } from "app/core/models";
import * as fromRoot from "app/core/reducers";
import * as scout from "app/core/actions";

@Component({
  selector: 'fc-scout-details',
  templateUrl: './scout-details.component.html',
  styleUrls: ['./scout-details.component.scss']
})
export class ScoutDetailsComponent implements OnInit, OnDestroy {

  scout: Scout;

  actionsSubscription: Subscription;
  selectedScoutSubscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.actionsSubscription = this.activatedRoute
      .params
      .select<string>('id')
      .map(id => new scout.SelectAction(id))
      .subscribe(this.store);

    this.selectedScoutSubscription = 
      this.store.select(fromRoot.getSelectedScout)
        .subscribe(scout => this.scout = scout);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
    this.selectedScoutSubscription.unsubscribe();
  }

  deleteScout(s: Scout) {
    this.store.dispatch(new scout.DeleteAction(s.id));
    this.router.navigate(['/scouts']);
  }

  editScout(s: Scout) {
    let dialogRef = this.dialog.open(ScoutDialogComponent, {
      data: {
        scout: Object.assign({}, s),
        isEdit: true
      }
    });

    dialogRef.afterClosed()
      .subscribe(updatedScout => {
        if (!updatedScout) {
          return;
        }
        this.store.dispatch(new scout.UpdateAction(updatedScout));
      });
  }

}
