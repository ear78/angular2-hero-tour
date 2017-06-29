import { Component } from '@angular/core';

import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">heroes</a>
        </nav>
        <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.scss' ]
  })

  export class AppComponent {
      title = "Tour Of Heroes";
  }
