import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YeetShop';
  totalPrice = 0;

  constructor(
    private router: Router,
  ) {}

  navLinks = [
    {
      path: 'products',
      icon: 'store'
    },
    {
      path: 'cart',
      icon: 'shopping_cart'
    },
    {
      path: 'orders',
      icon: 'view_list'
    }
  ];
}
