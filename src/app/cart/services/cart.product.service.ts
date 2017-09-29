import { Injectable, OnInit } from '@angular/core';

import { Product } from '../../products/model/product.model';
import {CartProduct} from '../model/cart-product.model';
import { Category } from '../../products/model/category.model';

@Injectable()
export class CartProductService implements OnInit {

    cartProducts: Array<CartProduct> = [];

    addToCart(product: Product) {
        console.log(this.cartProducts);
        console.log(Object.keys(this.cartProducts).indexOf(product));
        if (this.cartProducts.indexOf(product) === -1) {
            this.cartProducts.push(new CartProduct(product, 1));
        }
    }

    removeFromCart(product: Product) {
        const index = this.cartProducts.indexOf(product);
        if (index > -1) {
            this.cartProducts.splice(index, 1);
        }
    }

    getCartProducts() {
        return this.cartProducts;
    }

    ngOnInit() {
    }

}
