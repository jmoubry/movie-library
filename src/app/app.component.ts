import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <h2>{{movie.title}} Details</h2>
    <h2>My Movies</h2>
    <ul class="movies">
      <li *ngFor="let movie of movies">
        <span class="badge">{{movie.id}}</span> {{movie.title}}
      </li>
    </ul>
    <div><label>ID: </label>{{movie.id}}</div>
    <div><label>Title: </label><input [(ngModel)]="movie.title" placeholder="Title"></div>
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
    `]
})
export class AppComponent  {
  name = 'Movie Library';
  movies = MOVIES;
  movie: Movie = {
    id: 1,
    title: 'Beauty and the Beast'
  };
}
export class Movie {
  id: number;
  title: string;
}

const MOVIES: Movie[] = [
  { id: 11, title: 'Passengers' },
  { id: 12, title: 'Arrival' },
  { id: 13, title: 'Superman vs. Batman' },
  { id: 14, title: 'Lost in Translation' },
];
