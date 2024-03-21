import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  private Product = [
    {
      id: 1,
      name: 'alamin',
      email: 'alain@aiub.edu',
      password: 'xyz',
    },
    {
      id: 2,
      name: 'abc',
      email: 'abc@aiub.edu',
      password: '123',
    },
    {
      id: 3,
      name: 'pqr',
      email: 'pqr@aiub.edu',
      password: 'pqr',
    },
  ];

  findAll() {
    return this.Product;
  }

  findById(id: number) {
    return this.Product.find((item) => item.id === id);
  }

  create(createProductDto: CreateProductDto) {
    const lastId = [...this.Product].sort((a, b) => b.id - a.id);
    const newProduct = {
      id: lastId[0].id + 1,
      ...createProductDto,
    };
    this.Product.push(newProduct);
    return newProduct;
  }
}