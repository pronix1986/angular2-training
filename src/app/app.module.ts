import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,   // Child module
    CartModule        // Child module
  ],
  providers: [], // Register custom services
  bootstrap: [AppComponent]
})
export class AppModule { }
