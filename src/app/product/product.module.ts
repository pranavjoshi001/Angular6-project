import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from 'src/app/product/product-list.component';
import { CovertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { ProductDetailsComponent } from 'src/app/product/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild ([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent }
    ]),
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    CovertToSpacesPipe,
    ProductDetailsComponent,
  ]
})
export class ProductModule { }
