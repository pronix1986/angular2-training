import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './model/category.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: ProductService) {}

  // Add some new properties incl. arrays
  title = 'My First Angular App';
  name = 'Health';
  description = 'Some Product';
  price =  Infinity;
  category = Category.HEALTH;
  isAvailable = true;
  ingredients = ['SUN', 'WATER', 'AIR'];
  equivalents = ['BULB', 'BEAR', 'SMOKING'];
  products = this.service.getProducts();

  onBuy() {
    console.log('Bought!');
  }

}


