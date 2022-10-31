import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/products/products.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './warehouse.dto';
import { Warehouse } from './warehouse.entity';

@Injectable()
export class WarehouseService {
    constructor(@InjectRepository(Warehouse) private warehouseRepository: Repository<Warehouse>,
                @InjectRepository(Products) private productsRepository : Repository<Products>){}

    find(id :string){
        return this.warehouseRepository.find({where: [{ "Admin_id" : id }]});
    }

    async insertProduct(body)
    {
        const insertproduct = await this.productsRepository.create({...body})
        return this.productsRepository.save(insertproduct)
    }

    async updateProduct(id : number, attrs : Partial<ProductDto>) {
        const user = await this.productsRepository.findOne({where: [{ "Product_id": id }]})
        Object.assign(user,attrs)
        return await this.productsRepository.save(user)
    }

}

