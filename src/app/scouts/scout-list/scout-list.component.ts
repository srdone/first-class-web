import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { MdDialog } from "@angular/material";
import { ScoutDialogComponent } from "app/scouts/scout-dialog/scout-dialog.component";
import { Scout } from "app/core/models";
import * as fromRoot from 'app/core/reducers';
import * as scout from 'app/core/actions/scout';

@Component({
  selector: 'fc-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {

  scouts$: Observable<Scout[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.scouts$ = this.store.select(fromRoot.getAllScouts);
  }

  goToScout(id: string) {
    this.router.navigate(['/scouts', id ]);
  }

  createScout() {
    let dialogRef = this.dialog.open(ScoutDialogComponent, {
      data: {
        scout: {},
        isEdit: false
      }
    });

    dialogRef.afterClosed()
      .subscribe(newScout => {
        if (!newScout) {
          return;
        }
        this.store.dispatch(new scout.AddAction(newScout));
      });
  }

}
