import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Spiderman' },
      { id: 3, name: 'Nacho Libre' },
      { id: 4, name: 'Kirby' },
      { id: 5, name: 'Pikachu' },
      { id: 6, name: 'Link' },
      { id: 7, name: 'Russell Crowe' },
      { id: 8, name: 'Wolverine' },
      { id: 9, name: 'Bugs Bunny' },
      { id: 10, name: 'Daffy Duck' }
    ];
    const movies = [
      { title: 'Slumdog Millionaire', rating: 9.5 },
      { title: 'Dan in Real Life', rating: 9 },
      { title: 'Gladiator', rating: 8.5 },
      { title: 'Avatar', rating: 8 },
      { title: 'The Matrix', rating: 8 },
    ];
    return {heroes, movies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
