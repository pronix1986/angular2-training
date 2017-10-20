import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CartComponent} from './components/cart/cart.component';
import {CartProductService} from './services/cart.product.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartProductService],
  declarations: [CartComponent, CartItemComponent, ProcessOrderComponent],
  exports: [CartComponent]
})
export class CartModule { }
