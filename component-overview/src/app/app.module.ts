import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import {RouterModule} from "@angular/router";
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewComponent,
    ShadowDomComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
