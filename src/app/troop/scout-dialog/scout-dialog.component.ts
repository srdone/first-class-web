import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from "@angular/material";
import { Scout } from "app/core";

export interface ScoutDialogConfig { scout: Scout, isEdit: Boolean }

@Component({
  selector: 'fc-scout-dialog',
  templateUrl: './scout-dialog.component.html',
  styleUrls: ['./scout-dialog.component.scss']
})
export class ScoutDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: ScoutDialogConfig) { }

  ngOnInit() {
  }

}
