import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
// import { CATEGORIES } from "../../database/categories-types";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})  
export class HomeComponent {

  constructor(
    private categoryService: CategoryService,
  ) { }

  categories?: any;

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
