import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/classes/product.class';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openProductDetailDialog() {
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
