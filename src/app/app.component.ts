import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <nav>
      <a routerLink="/search">Search</a>
      <a routerLink="/movies">Movies</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Movie Library';
}
