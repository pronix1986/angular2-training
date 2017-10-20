import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from '../../../products/model/product.model';
import { Category } from '../../../products/model/category.model';
import { CartProductService } from '../../services/cart.product.service';
import {MessagesService} from '../../../services/messages.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: Product;

  products: Array<Product> = [];


  constructor(private cartService: CartProductService,
    private messagesService: MessagesService,
    private router: Router) {
    this.products = cartService.getCartProducts();
  }

  getProducts() {
    return this.products;
  }

  emptyCart() {
    this.cartService.emptyCart();
    this.messagesService.clearMessageList();
    this.messagesService.addMessage('Cart is empty');
  }

  order() {
    this.router.navigate(['/order']);
  }

  ngOnInit() {
  }

}
