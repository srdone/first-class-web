import { Component, OnInit } from '@angular/core';
import { ScoutsService, Scout } from "app/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

import "rxjs/add/operator/switchMap";

@Component({
  selector: 'fc-scout-details',
  templateUrl: './scout-details.component.html',
  styleUrls: ['./scout-details.component.scss']
})
export class ScoutDetailsComponent implements OnInit {

  scout$: Observable<Scout>;

  constructor(
    private scoutsService: ScoutsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.scout$ = this.activatedRoute
      .params
      .switchMap(params => this.scoutsService.getScout$(params.id));
  }

}
