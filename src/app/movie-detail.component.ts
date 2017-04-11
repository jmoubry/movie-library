import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
})

export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back(); // TODO: CanDeactivate
  }
}
