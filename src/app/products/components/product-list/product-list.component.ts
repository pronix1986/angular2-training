import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {CartProductService} from '../../../cart/services/cart.product.service';
import {Product} from '../../model/product.model';
import {Category} from '../../model/category.model';
import {MessagesService} from '../../../services/messages.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,
              private cartProductService: CartProductService,
              private router: Router,
              private messagesService: MessagesService
            ) { }
  products: Product[];
  propertyName: string;
  asc = false;
  success: boolean;


  doBuy(product: Product) {

    this.success = this.cartProductService.addToCart(product);
    if (this.success) {
      this.messagesService.addMessage(`Added to cart:  ${product.name}`);
    }
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
    // console.log('trying on init');
    this.productService.getProducts().then(data => {
      // console.log(data);
      if (data.length !== 0) {
        this.products = data;
      } else {
        this.productService.setDefaultProducts()
        .then(products =>  {console.log('products: ' + products); this.products = products;})
        .catch((err) => console.log(err));
      }
    });
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
  }

}
