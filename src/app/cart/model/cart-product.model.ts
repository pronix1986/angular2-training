import {Product} from '../../products/model/product.model';

export class CartProduct extends Product {
    quantity: number;
    constructor(product: Product, quantity: number) {
        super(product.id, product.name, product.description, product.category, product.price);
        this.quantity = quantity;
    }
}
