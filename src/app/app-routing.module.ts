import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent }   from './search.component';
import { MoviesComponent }      from './movies.component';
import { MovieDetailComponent }  from './movie-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search',  component: SearchComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'movies',     component: MoviesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
