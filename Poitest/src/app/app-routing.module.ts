import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {POIComponent} from "./poi/poi.component";

const routes: Routes = [
  { path: '', redirectTo: '/poi', pathMatch: 'full' },
  { path: 'poi', component: POIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
