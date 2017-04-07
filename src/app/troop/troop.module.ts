import { NgModule } from '@angular/core';
import { ScoutCardComponent } from './scout-card/scout-card.component';
import { ScoutListComponent } from './scout-list/scout-list.component';
import { ScoutDetailsComponent } from './scout-details/scout-details.component';
import { SharedModule } from "app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    ScoutCardComponent,
    ScoutListComponent,
    ScoutDetailsComponent
  ]
})
export class TroopModule { }
