import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  products: Iproduct[];
  productOne: Iproduct;
  productTwo: Iproduct;
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: x => {
        this.products = x.filter(( product: Iproduct) => product.productId < 3);
        this.productOne = this.products[0];
        this.productTwo = this.products[1];
      }
    });
  }

}
