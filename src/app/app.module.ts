import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

import {LocalStorageService} from './services/local-storage.service';
import {ConfigOptionsService} from './services/config-options.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,   // Child module
    CartModule        // Child module
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService
  ], // Register custom services
  bootstrap: [AppComponent]
})
export class AppModule { }
