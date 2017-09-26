import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { CartProductService } from './services/cart.product.service';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, CartProductService], // Register custom services
  bootstrap: [AppComponent]
})
export class AppModule { }
