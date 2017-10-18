import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

import 'rxjs/add/operator/toPromise';

const productList = [
    new Product(1, 'Banana', 'Nigeria', Category.FRUIT, 1),
    new Product(2, 'Orange', 'Turkey', Category.FRUIT, 2),
    new Product(3, 'Potato', 'Ukraine', Category.FRUIT, 2),
    new Product(4, 'Audi B4', 'Germany', Category.VEHICLE, 10000)
];
const productListPromise = Promise.resolve(productList);

const productsUrl = 'http://localhost:4201/products';

@Injectable()
export class ProductService {

    constructor(
        private http: HttpClient
    ) {}

    setDefaultProducts(): Promise<Product[]> {
        // console.log('trying set default product');
        const body = JSON.stringify(productList),
        options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
        // console.log(`body: ${body}`);
        return this.http.post(productsUrl, body, options)
            .toPromise()
            .then(response => <Product[]> response)
            .catch(this.handleError);

    }

    getProducts(): Promise<Product[]> {
        // console.log('trying getProducts');
 //       return productListPromise;
        return this.http.get(productsUrl)
            .toPromise()
            .then(response => {
                console.log(response);
                return <Product[]> response;
            })
            .catch(this.handleError);
    }

    getProduct(id: number | string): Promise<Product> {
        return this.getProducts()
            .then(product => product.find(p => p.id === +id));
        // return this.http.get(`${productsUrl}/${id}`)
        //     .toPromise()
        //     .then( response => <Product>response )
        //     .catch( this.handleError );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }

}
