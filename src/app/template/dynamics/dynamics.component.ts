import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}
interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newGame: string = '';
  person: Person = {
    name: 'Jose',
    favorites: [
      { id: 1,name: 'Metal Gear' },
      { id: 2,name: 'DeathStranding' }
    ]
  }

  save() {
    console.log('posted');
  }

  add() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }
    this.newGame = '';
    this.person.favorites.push({ ...newFavorite });
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

}
