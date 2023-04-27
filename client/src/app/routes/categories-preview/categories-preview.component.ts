import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss']
})
export class CategoriesPreviewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }

  categories: any;

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

}
