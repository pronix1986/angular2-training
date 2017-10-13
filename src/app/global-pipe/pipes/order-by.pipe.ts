import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../products/model/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Product>, field: string, asc?: boolean): Array<Product> {
    if (array === null) {
      return null;
    }

    if (!asc) {
      asc = false;
    }

    array.sort((a: Product, b: Product): number => {
      if (typeof a[field] === 'string' || a[field] instanceof String) {
        return asc ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      } else {
        return asc ? a[field] - b[field] : b[field] - a[field];
      }
    });

    return array;
  }

}
