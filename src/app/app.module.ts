import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";
import { MaterialModule } from "@angular/material";
import { TroopModule } from "app/troop/troop.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    MaterialModule,
    AppRoutingModule,
    TroopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
