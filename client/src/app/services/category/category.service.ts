import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  categories?: Category[];

  private url = 'http://localhost:4000/category';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/`);
  }

  addCategory(category: Category) {
    return this.httpClient.post(this.url + `/`, category);
  }

  updateCategory(category: Category) {
    return this.httpClient.put(this.url + `/${category._id}`, category);
  }

  deleteCategory(category: Category) {
    return this.httpClient.delete(this.url + `/${category._id}`);
  }

}
