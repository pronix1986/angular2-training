import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {MessagesService} from '../../../services/messages.service';
import {CartProductService} from '../../services/cart.product.service';


@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private messagesService: MessagesService,
    private cartProductService: CartProductService) { }
  private buildForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [
        '',
        [Validators.required, Validators.maxLength(50)]
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]
      ],
      phone: ''
    });
}
  ngOnInit() {
    this.buildForm();
  }

  save() {
    console.log(this.userForm);
    console.log(`Saved: ${JSON.stringify(this.userForm.value)}`);
    this.messagesService.clearMessageList();
    this.messagesService
      .addMessage(`Your order is: ${JSON.stringify(this.cartProductService.getCartProducts())}. Our managers will contact you soon!`);
    this.cartProductService.emptyCart();
    this.router.navigate(['/home']);
}

goBack(): void {
  this.router.navigate(['/cart']);
}

}
