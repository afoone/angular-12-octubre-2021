import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotosListComponent } from './components/fotos-list/fotos-list.component';
import { FotoComponent } from './components/foto/foto.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FotosListComponent, FotoComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
