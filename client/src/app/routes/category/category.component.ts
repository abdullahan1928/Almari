import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  products: any;
  category = this.route.snapshot.params['title'];

  ngOnInit(): void {
    this.productService.getProductsByCategory(this.category).subscribe((products) => {
      this.products = products;
    })
  }

  searchField = '';

  onSearch(event: any) {
    this.searchField = event.target.value.toLowerCase();
  }
}

