import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/classes/product.class';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
