import { Injectable } from '@angular/core';
import { Product } from '../classes/product.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
    constructor() { }

    get() {
        return JSON.parse(localStorage.getItem('cart'));
    }

    add(product: Product) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) 
            cart = [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
