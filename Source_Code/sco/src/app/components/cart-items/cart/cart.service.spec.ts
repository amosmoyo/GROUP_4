import { TestBed } from '@angular/core/testing';

import { CartServiceT } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartServiceT = TestBed.get(CartServiceT);
    expect(service).toBeTruthy();
  });
});
