import { Component, Inject, InjectionToken, Optional } from '@angular/core';
import { Category } from './products/model/category.model';
import {RAND_STR, randomStringFactory} from './model/random-string.factory';

const APPLICATION = new InjectionToken<any>('Application');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: APPLICATION, useValue: { App: 'Shop', Ver: '1.0' }}, // ConstantService
    {provide: RAND_STR, useFactory: randomStringFactory(6)} // GeneratorService
  ]
})
export class AppComponent {

  constructor(@Inject(APPLICATION) private ttl: any,
              @Optional() @Inject(RAND_STR)  private rand: string
              ) { }

  // Add some new properties incl. arrays
 // title = 'My First Angular App';
  title = `${ this.ttl.App } ${ this.ttl.Ver } ${ this.rand ? this.rand : '' }`;
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

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }


}


