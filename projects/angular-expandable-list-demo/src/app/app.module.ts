import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpandableListModule } from '../../../angular-expandable-list/src/lib/expandable-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpandableListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
