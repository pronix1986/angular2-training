import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../products/model/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }



  ngOnInit() {
    console.log(this.product);
  }

}
