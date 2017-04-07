import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from "@angular/router";
import {
  MdCardModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: []
})
export class SharedModule { }
