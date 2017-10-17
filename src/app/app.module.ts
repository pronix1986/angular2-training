import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

import {LocalStorageService} from './services/local-storage.service';
import {ConfigOptionsService} from './services/config-options.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routing.module';
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from './services/messages.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,   // Child module
    CartModule,       // Child module
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    MessagesService
  ], // Register custom services
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
} 


