import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import {GlobalPipeModule} from '../global-pipe/global-pipe.module';


@NgModule({
  imports: [
    CommonModule,
    GlobalPipeModule
  ],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }
