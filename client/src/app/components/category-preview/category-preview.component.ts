import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/services/category/category.model';
import { Product } from 'src/app/services/product/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products!: Product[];

  @Input() category!: Category;

  ngOnInit(): void {
    this.productService.getProductsByCategory(this.category.title).subscribe((products) => {
      this.products = products;
    })
  }

}
