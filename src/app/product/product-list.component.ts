import {Component,OnInit} from '@angular/core';
import { Iproduct } from 'src/app/product/product';
import { ProductService } from './product.service';

@Component({
  selector : 'pm-products',
  templateUrl : './product-list.component.html',
  styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {
   
  }
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Iproduct[];
  products: Iproduct[] = [];

  toggleImage(): void{
    this.showImage = !this.showImage
  }

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products=>{
        this.products=products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    )
    
  }
}
