import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOverviewComponent } from './component-overview/component-overview.component';
import {RouterModule} from "@angular/router";
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewComponent,
    ShadowDomComponent,
    ParentComponent,
    ChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
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
