import { Component, Input } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'movie-detail',
  template: `
    <div *ngIf="movie">
      <h2>{{movie.title}} Details</h2>
      <div><label>ID: </label>{{movie.id}}</div>
      <div><label>Title: </label><input [(ngModel)]="movie.title" placeholder="Title"></div>
    </div>
    `
})

export class MovieDetailComponent {
  @Input() movie: Movie;
}
