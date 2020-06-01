import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CartService } from './cart-service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Iproduct } from 'src/app/iproduct';
import { CartServiceT } from './cart/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit, OnChanges, OnDestroy {
  items: any;
  itemsSub: Subscription;
  param;
  product: Iproduct;
  tokenId;
  total;
  constructor(
    private cart: CartService,
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private payment: CartServiceT
  ) { }

  handler: any = null;

  ngOnInit() {
    this.items = this.cart.getItems();
    this.total = this.cart.getTotal();
    this.itemsSub = this.cart.getItemListener().subscribe(items => {
      this.items = items;
    });
   /* this.param = +this.route.snapshot.paramMap.get('id');

    if (this.param) {
      this.productService.getProduct(this.param).subscribe({
        next: product => {
          this.product = product;
        }
      });
    } */
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

  ngOnChanges() {
    this.cart.getTotal();
    this.clearCart();
  }

  clearCart() {
   this.items = [];
   this.cart.clearCart();
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

}
