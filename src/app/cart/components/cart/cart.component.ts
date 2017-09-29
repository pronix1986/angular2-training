import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../products/model/product.model';
import { Category } from '../../../products/model/category.model';
import { CartProductService } from '../../services/cart.product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: Product;

  products: Array<Product> = [];


  constructor(private cartService: CartProductService) {
    this.products = cartService.getCartProducts();
  }

  getProducts() {
    return this.products;
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

  ngOnInit() {
  }

}
