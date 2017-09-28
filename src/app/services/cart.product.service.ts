import { Injectable, OnInit } from '@angular/core';

import { Product } from '../products/model/product.model';
import { Category } from '../products/model/category.model';

@Injectable()
export class CartProductService implements OnInit {

    cartProducts: Array<Product> = [];

    addToCart(product: Product) {
        this.cartProducts.push(product);
    }

    getCartProducts() {
        return this.cartProducts;
    }

    ngOnInit() {
        this.addToCart(new Product(0, '', '', Category.FRUIT));
    }

}
