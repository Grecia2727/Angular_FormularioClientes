import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList <any>;
  // Almaceno temporalmente una variable
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    return this.productList = this.firebase.list ('products');
  }

  insertProduct(product: Product) {
    this.productList.push({
      name: product.name,
      lastname: product.lastname,
      age: product.age,
      birth: product.birth
    });
  }

  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      name: product.name,
      lastname: product.lastname,
      age: product.age,
      birth: product.birth
    });
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }

}
