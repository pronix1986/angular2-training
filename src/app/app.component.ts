import { Component } from '@angular/core';
import { Category } from './products/model/category.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  // Add some new properties incl. arrays
  title = 'My First Angular App';
  name = 'Health';
  description = 'Some Product';
  price =  Infinity;
  category = Category.HEALTH;
  isAvailable = true;
  ingredients = ['SUN', 'WATER', 'AIR'];
  equivalents = ['BULB', 'BEAR', 'SMOKING'];


  onBuy() {
    console.log('Bought!');
  }

}


