import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {CartProductService} from './services/cart.product.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CartProductService],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent]
})
export class CartModule { }
