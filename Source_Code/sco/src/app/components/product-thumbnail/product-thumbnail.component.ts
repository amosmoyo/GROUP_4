import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Iproduct } from 'src/app/iproduct';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() products: Iproduct[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRoute = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  route(id) {
   this.onRoute.emit(id);
  }

}
