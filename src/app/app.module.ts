import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartProductService } from './services/cart.product.service';
import { CartComponent } from './components/cart/cart.component';
import {ProductsModule} from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule
  ],
  providers: [CartProductService], // Register custom services
  bootstrap: [AppComponent]
})
export class AppModule { }
