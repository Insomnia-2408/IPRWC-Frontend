import {ProductType} from './ProductType';

export class Product {
  constructor(name: string, id: number, productType: ProductType, amount: number, imagePath: string, price: number) {
    this.name = name;
    this.id = id;
    this.productType = productType;
    this.amount = amount;
    this.imagePath = imagePath;
    this.price = price;
  }

  name: string;
  id: number;
  productType: ProductType;
  amount: number;
  imagePath: string;
  price: number;
}
