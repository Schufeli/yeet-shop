import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailDialogComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
