import 'hammerjs';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";
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
    AppRoutingModule,
    TroopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
