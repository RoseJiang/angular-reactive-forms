import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Hero } from '../data-model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
	heroes: Observable<Hero[]>;
	isLoading = false;
	selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.getHeroes();
  }

  getHeroes() {
  	this.isLoading = true;
  	this.heroes = this.heroService.getHeroes().pipe(finalize(() => this.isLoading = false));
  	this.selectedHero = undefined;
  }

  select(hero: Hero) {
  	this.selectedHero = hero;
  }

}
