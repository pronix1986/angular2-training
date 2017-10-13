import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ProductService} from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import {GlobalPipeModule} from '../global-pipe/global-pipe.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalPipeModule,
    ProductsRoutingModule,
    FormsModule
  ],
  declarations: [ProductListComponent, ProductFormComponent],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }
