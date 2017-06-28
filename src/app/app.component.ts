import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/dashboard">dashboard</a>
        <a routerLink="/heroes">heroes</a>
        </nav>
        <router-outlet></router-outlet>
  `
  })

  export class AppComponent {
      title = "Tour Of Heroes";
  }
