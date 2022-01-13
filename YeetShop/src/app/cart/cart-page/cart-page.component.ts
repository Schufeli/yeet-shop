import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/classes/cartItem.class';
import { Product } from 'src/app/shared/classes/product.class';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartItems: CartItem[] = []
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.get().forEach((product: Product) => {
      const element = this.cartItems.find(element => element.id == product.id);
      if (element === undefined) {
        this.cartItems.push({ id: product.id, name: product.name, description: product.description, image: product.image, price: this.setPrice(product), count: 1 });
      } else {
        element.count++;
      }
    });
  }

  setPrice(product: Product): number {
    if (product.reducedPrice <= 0) {
      return product.price;
    }
    else {
      return product.reducedPrice;
    }
  }
}
