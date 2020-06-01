import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CartService } from '../cart-items/cart-service';
import { CartServiceT } from '../cart-items/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Iproduct;
  param: number;
  total;
  tokenId;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private cart: CartService,
    private router: Router,
    private payment: CartServiceT
  ) { }
  handler: any = null;

  ngOnInit() {
    this.param = +this.route.snapshot.paramMap.get('id');

    if (this.param) {
      this.productService.getProduct(this.param).subscribe({
        next: product => {
          this.product = product;
          this.total = `${this.product.price / 100}`;
        }
      });
    }
  }

  addToCart(item) {
    this.cart.addToCart(item);
  }

  amos() {
    const payload = {
      id: this.tokenId.id,
      amount: this.total,
      date: Date.now()
    };
    this.payment.buyItem(payload);
    return;
  }

  pay(amount) {
    const handler = (window as any).StripeCheckout.configure({
      key: 'pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF',
      locale: 'auto',
      amount: '999',
      token: (obj: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.tokenId = obj;
        this.total = amount;
        this.amos();
      }
    });
    handler.open({
      name: 'CROMO MOBILE',
      description: 'Online Mobile Store',
      amount: amount * 100
    });


  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (window as any).StripeCheckout.configure({
          key: 'pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF',
          locale: 'auto',
          amount: 999,
          token(token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            this.tokenId = token;
            this.amos();
          }
        });
      };

      window.document.body.appendChild(s);
    }
  }


}
