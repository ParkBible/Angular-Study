import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import {RouterModule} from "@angular/router";
import {OnChangesComponent} from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewComponent,
    OnChangesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'onchange', component: OnChangesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
