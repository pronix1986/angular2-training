import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Product} from '../../../products/model/product.model';
import {CartProduct} from '../../model/cart-product.model';
import {CartProductService} from '../../services/cart.product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges {
  @Input() product: CartProduct;
  cost: number;

  constructor(private cartProductService: CartProductService) { }

  removeFromCart() {
    this.cartProductService.removeFromCart(this.product);
  }

  onQualityChange(value: number): void {
    this.product.quantity = value;
    this.cost = this.product.price * this.product.quantity;
  }


  ngOnInit() {
    this.cost = this.product.price;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
