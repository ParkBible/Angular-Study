import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { POIComponent } from './poi/poi.component';
import { PoiResultComponent } from './poi-result/poi-result.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkResultComponent } from './bookmark-result/bookmark-result.component';

@NgModule({
  declarations: [
    AppComponent,
    POIComponent,
    PoiResultComponent,
    BookmarkComponent,
    BookmarkResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
