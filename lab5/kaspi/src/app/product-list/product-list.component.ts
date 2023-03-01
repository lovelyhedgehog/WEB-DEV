import { Component } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  selectedCategory = '';
    filteredProducts = this.products;

    onCategoryChange(event: any) {
      this.selectedCategory = event.target.value;
      if (this.selectedCategory) {
          this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
      } else {
          this.filteredProducts = this.products;
      }
  }
  
}
