import { Injectable, OnInit } from '@angular/core';

import { Product } from '../../products/model/product.model';
import {CartProduct} from '../model/cart-product.model';
import { Category } from '../../products/model/category.model';

@Injectable()
export class CartProductService implements OnInit {

    cartProducts: Array<CartProduct> = [];

    addToCart(product: Product) {

        const obj = this.cartProducts.find((cartProduct) =>
            cartProduct.name === product.name &&
            cartProduct.description === product.description &&
            cartProduct.category === product.category &&
            cartProduct.price === product.price
        );


        if (!obj) {
            this.cartProducts.push(new CartProduct(product, 1));
        }
    }

    removeFromCart(cartProduct: CartProduct) {
        const index = this.cartProducts.indexOf(cartProduct);
        if (index > -1) {
            this.cartProducts.splice(index, 1);
        }
    }

    emptyCart() {
        this.cartProducts.length = 0;
    }

    getCartProducts() {
        return this.cartProducts;
    }

    getTotalProducts() {
        return this.cartProducts ? this.cartProducts.length : 0;
    }

    getTotalCost() {
        return this.cartProducts ? this.cartProducts.reduce((accumulator, value) =>
                (accumulator + value.price * value.quantity), 0) : 0;
    }



    ngOnInit() {
    }

}
