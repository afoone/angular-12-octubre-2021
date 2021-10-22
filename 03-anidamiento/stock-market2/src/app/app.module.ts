import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TickerComponent } from './components/stock/ticker/ticker.component';
import { TickerListComponent } from './components/stock/ticker-list/ticker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    TickerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
