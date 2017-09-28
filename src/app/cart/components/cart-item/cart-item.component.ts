import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../products/model/product.model';
import {CartProductService} from '../../services/cart.product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;

  constructor(private cartProductService: CartProductService) { }

  removeFromCart() {
    this.cartProductService.removeFromCart(this.product);
  }


  ngOnInit() {
    console.log(this.product);
    this.quantity = 1;
  }

}
