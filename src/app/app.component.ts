import { Component, Inject, InjectionToken } from '@angular/core';
import { Category } from './products/model/category.model';

const APPLICATION = new InjectionToken<any>('Application');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: APPLICATION, useValue: { App: 'Shop', Ver: '1.0' }}]
})
export class AppComponent {

  constructor(@Inject(APPLICATION) private ttl: any) {
    console.log(ttl);
  }

  // Add some new properties incl. arrays
 // title = 'My First Angular App';
  title = `${ this.ttl.App } ${ this.ttl.Ver }`;
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


