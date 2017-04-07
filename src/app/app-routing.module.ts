import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoutListComponent } from "app/troop/scout-list/scout-list.component";
import { ScoutDetailsComponent } from "app/troop/scout-details/scout-details.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'scouts', component: ScoutListComponent },
      { path: 'scouts/:id', component: ScoutDetailsComponent },
      { path: '', redirectTo: '/scouts', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
