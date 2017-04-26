import 'hammerjs';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TroopModule } from "app/scouts/scouts.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,    
    CoreModule,
    TroopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
