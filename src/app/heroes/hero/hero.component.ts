import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public clicked: boolean = false;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'Hulk';
    this.clicked = true;
  }

  changeAge(): void {
    this.age = 38;
    this.clicked = true;
  }

  resetValues(): void {
    this.name = 'ironman';
    this.age = 45;
    this.clicked = false;
  }
}
