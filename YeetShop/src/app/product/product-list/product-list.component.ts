import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() { }

  products: Product[] = [
    { id: "f82efcee-5827-422a-945e-39c50b5047b0", name: "Eichof Lager 50cl", image: "https://dummyimage.com/420x260", price: 5.00, reducedPrice: 4.50 },
    { id: "138c5b47-da84-4942-8bee-b303403f74c3", name: "Moretti Lager 50cl", image: "https://dummyimage.com/420x260", price: 6.00, reducedPrice: 5.50 },
    { id: "ce8f4091-e6ce-4689-a15e-973de6cc8117", name: "Heineken Lager 50cl", image: "https://dummyimage.com/420x260", price: 1.00, reducedPrice: 0.00 },
    { id: "54ce074f-dfa7-4766-8804-4018343de61d", name: "Leue Gold 50cl", image: "https://dummyimage.com/420x260", price: 5.00, reducedPrice: 3.50 }
  ];

  ngOnInit(): void {
  }

}
