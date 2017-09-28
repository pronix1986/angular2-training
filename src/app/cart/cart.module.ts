import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {CartProductService} from './services/cart.product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CartProductService],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule { }
