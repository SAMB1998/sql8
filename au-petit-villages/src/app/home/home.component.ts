import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [];
  searchTerm: string = '';
  sortOrder: string = 'asc';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
