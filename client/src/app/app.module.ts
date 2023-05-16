import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CartDropdownComponent } from './components/cart-dropdown/cart-dropdown.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryPreviewComponent } from './components/category-preview/category-preview.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { CategoriesPreviewComponent } from './routes/categories-preview/categories-preview.component';
import { CategoryComponent } from './routes/category/category.component';
import { ContactComponent } from './routes/contact/contact.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { ShopComponent } from './routes/shop/shop.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './routes/cart/cart.component';
import { MinicartItemComponent } from './components/minicart-item/minicart-item.component';
import { CheckoutComponent } from './routes/checkout/checkout.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CartDropdownComponent,
    CartItemComponent,
    CategoriesComponent,
    CategoryPreviewComponent,
    LoginFormComponent,
    NavbarComponent,
    ProductCardComponent,
    RegisterFormComponent,
    SearchBarComponent,
    CartIconComponent,
    CategoriesPreviewComponent,
    CategoryComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    HomeComponent,
    SearchFilterPipe,
    CartComponent,
    MinicartItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
