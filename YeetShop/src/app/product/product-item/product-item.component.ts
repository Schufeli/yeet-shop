import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/classes/product.class';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    public dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  openProductDetailDialog() {
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      data: this.product
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        this.cartService.add(product);
      }
    });
  }
}
