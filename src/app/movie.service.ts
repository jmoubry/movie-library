import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]> { return Promise.resolve(MOVIES); }
  getMovie(id: Number): Promise<Movie> {
    return this.getMovies().then(movies => movies.find(movie => movie.id === id));
  }
}
