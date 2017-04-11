import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Scout, ScoutsService } from "app/core";
import { Router } from "@angular/router";
import { MdDialog } from "@angular/material";
import { ScoutDialogComponent } from "app/troop/scout-dialog/scout-dialog.component";

@Component({
  selector: 'fc-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {

  scouts$: Observable<Scout[]>;

  constructor(
    private scoutsService: ScoutsService,
    private router: Router,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.scouts$ = this.scoutsService.getScouts$();
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
        this.scoutsService.createScout(newScout);
      });
  }

}
