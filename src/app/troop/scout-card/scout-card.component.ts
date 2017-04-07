import { Component, OnInit, Input } from '@angular/core';
import { Scout } from "app/core";

@Component({
  selector: 'fc-scout-card',
  templateUrl: './scout-card.component.html',
  styleUrls: ['./scout-card.component.scss']
})
export class ScoutCardComponent implements OnInit {
  @Input() scout: Scout;

  constructor() { }

  ngOnInit() {
  }

}
