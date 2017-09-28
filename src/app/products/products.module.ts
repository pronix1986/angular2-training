import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }
