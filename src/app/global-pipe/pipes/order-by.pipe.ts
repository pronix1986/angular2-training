import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../products/model/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Product>, field: string, asc?: boolean): Array<Product> {
    console.log(array);
    if (!asc) {
      asc = false;
    }

    array.sort((a: Product, b: Product): number => {
      console.log(a);
      console.log(b);
      console.log(field);
      console.log(a[field]);
      console.log(b[field]);
      if (typeof a[field] === 'string' || a[field] instanceof String) {
        console.log(a[field]);
        return asc ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      } else {
        console.log(a[field]);
        return asc ? a[field] - b[field] : b[field] - a[field];
      }
    });

    return array;
  }

}
