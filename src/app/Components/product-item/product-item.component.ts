import { ProductsService } from './../Services/products.service';
import { Component, Input } from '@angular/core';
import { IProduct } from '../Model/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  products: any;
  constructor(private productsService: ProductsService) {}
  @Input() product: IProduct = {
    _id: 0,
    title: '',
    desc: '',
    price: 0,
    quantity: 0,
    img: '',
    categories: '',
  };

  handlerDeleteProduct(productId: any) {
    this.productsService.deleteProduct(productId).subscribe((response) => {
      console.log("ss")
      this.products = this.products.filter((data: any) => {
        return data._id != productId;
      });
    });
  }
}
