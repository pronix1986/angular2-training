import { Injectable } from '@angular/core';

import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Injectable()
export class ProductService {

    getProducts() {
        return [
            new Product(1, 'Banana', 'Nigeria', Category.FRUIT, 1),
            new Product(2, 'Orange', 'Turkey', Category.FRUIT, 2),
            new Product(3, 'Potato', 'Ukraine', Category.FRUIT, 2),
            new Product(4, 'Audi B4', 'Germany', Category.VEHICLE, 10000)
        ];
    }

}
