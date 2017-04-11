import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MoviesComponent } from './movies.component';
import { SearchComponent } from './search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesComponent,
    SearchComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
