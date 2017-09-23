import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  name = 'App';
  description = 'My First Angular App';
  price =  Infinity;
  category = Category.HEALTH;
  isAvailable = true;
  ingredients = ['SUN', 'WATER', 'AIR'];
  equivalents = ['BULB', 'BEAR', 'SMOKING'];

  // constructor(public name = 'App', public description = 'My First Angular App',
  //     public price = 1, public category = Category.HEALTH, public isAvailable = true,
  //     public ingredients = ['SUN', 'WATER', 'AIR'], public equivalents = ['LAMPPOST', 'BEAR', '-']) {}


}

export const enum Category {'VEHICLE', 'HEALTH', 'CLOTHING', 'SHOE', 'WATCH'}
