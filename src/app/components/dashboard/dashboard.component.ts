import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../hero';
import { HeroDetailComponent } from '../heroDetail/hero-detail.component';

@Component ({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
