import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from '../../model/product.model';
import {ProductService} from '../../services/product.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product(null, '', null, null, null);

    this.route.params
    .switchMap((params: Params) => {
      console.log(this.productService.getProduct(+params['id']));
      return params['id']
        ? this.productService.getProduct(+params['id'])
        : Promise.resolve(null);
      })
      .subscribe(
        product => this.product = Object.assign({}, product),
        err => console.log(err)
    );
    console.log(this.product);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}
