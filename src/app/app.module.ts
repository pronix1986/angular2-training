import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

import {LocalStorageService} from './services/local-storage.service';
import {ConfigOptionsService} from './services/config-options.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,   // Child module
    CartModule,       // Child module
    AppRoutingModule
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService
  ], // Register custom services
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
} 
