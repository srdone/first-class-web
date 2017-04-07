import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoutsService } from "app/core/scouts.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ScoutsService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module is already loaded. Import it only in the App module');
    }
  }

}
