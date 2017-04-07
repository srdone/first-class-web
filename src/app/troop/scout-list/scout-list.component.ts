import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Scout, ScoutsService } from "app/core";

@Component({
  selector: 'fc-scout-list',
  templateUrl: './scout-list.component.html',
  styleUrls: ['./scout-list.component.scss']
})
export class ScoutListComponent implements OnInit {

  scouts$: Observable<Scout[]>;

  constructor(private scoutsService: ScoutsService) { }

  ngOnInit() {
    this.scouts$ = this.scoutsService.getScouts$();
  }

}
