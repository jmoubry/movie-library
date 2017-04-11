import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-movies',
  template: `
    <ul class="movies">
      <li *ngFor="let movie of movies"
          (click)="onSelect(movie)"
          [class.selected]="movie === selectedMovie">
        <span class="badge">{{movie.id}}</span> {{movie.title}}
      </li>
    </ul>
    <movie-detail [movie]="selectedMovie"></movie-detail>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .movies {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .movies li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .movies li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .movies li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .movies .text {
        position: relative;
        top: -3px;
      }
      .movies .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    providers: [MovieService]
})

export class MoviesComponent implements OnInit {
  name = 'Movie Library';
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().then(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
