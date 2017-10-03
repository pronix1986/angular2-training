import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {CartProductService} from '../../../cart/services/cart.product.service';
import {Product} from '../../model/product.model';
import {Category} from '../../model/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,
              private cartProductService: CartProductService) { }
  products = this.productService.getProducts();

  doBuy(product: Product) {
    console.log('Do Buy');
    console.log(product);
    this.cartProductService.addToCart(product);
  }

  ngOnInit() {
  }

}
