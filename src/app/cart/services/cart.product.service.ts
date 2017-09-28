import { Injectable, OnInit } from '@angular/core';

import { Product } from '../../products/model/product.model';
import { Category } from '../../products/model/category.model';

@Injectable()
export class CartProductService implements OnInit {

    cartProducts: Array<Product> = [];

    addToCart(product: Product) {
        this.cartProducts.push(product);
    }

    removeFromCart(product: Product) {
        const index = this.cartProducts.indexOf(product);
        if (index > -1) {
            this.cartProducts.splice(index, 1);
        }
    }

    getCartProducts() {
        this.addToCart(new Product(1, 'Banana', 'Nigeria', Category.FRUIT));
        this.addToCart(new Product(2, 'Orange', 'Turkey', Category.FRUIT));
        return this.cartProducts;
    }

    ngOnInit() {
    }

}
