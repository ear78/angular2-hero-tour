import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
  ){}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }

  save(): void{
      this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void{
      this.location.back();
  }
}