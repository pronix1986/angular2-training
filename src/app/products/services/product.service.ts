import { Injectable } from '@angular/core';

import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

const productList = [
    new Product(1, 'Banana', 'Nigeria', Category.FRUIT, 1),
    new Product(2, 'Orange', 'Turkey', Category.FRUIT, 2),
    new Product(3, 'Potato', 'Ukraine', Category.FRUIT, 2),
    new Product(4, 'Audi B4', 'Germany', Category.VEHICLE, 10000)
];

const productListPromise = Promise.resolve(productList);

@Injectable()
export class ProductService {

    getProducts(): Promise<Product[]> {
        return productListPromise;
    }

    getProduct(id: number | string): Promise<Product> {
        return this.getProducts()
            .then(product => product.find(p => p.id === +id));
    }

}
