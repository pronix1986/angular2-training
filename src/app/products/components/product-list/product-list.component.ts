import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {CartProductService} from '../../../cart/services/cart.product.service';
import {Product} from '../../model/product.model';
import {Category} from '../../model/category.model';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,
              private cartProductService: CartProductService,
              private router: Router) { }
  products = this.productService.getProducts();
  propertyName: string;
  asc = false;

  doBuy(product: Product) {
    this.cartProductService.addToCart(product);
  }

  doView(product: Product) {
    console.log(`-- View -- ${product}`);
    const link = ['/view', product.id];
    this.router.navigate(link);
  }



  sortBy(field: string) {
      this.asc = this.propertyName ? !this.asc : false;
      this.propertyName = field;
  }

  ngOnInit() {
  }

}
