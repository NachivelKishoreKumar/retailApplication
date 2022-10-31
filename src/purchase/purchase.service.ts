import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/orders/orders.entity';
import { Products } from 'src/products/products.entity';
import { Repository } from 'typeorm';
import { PurchaseDto } from './purchase.dto';
import { Purchase } from './purchase.entity';

@Injectable()
export class PurchaseService {
    @InjectRepository(Products) private productsRepository: Repository<Products>
    @InjectRepository(Purchase) private purchaseRepository: Repository<Purchase>
    @InjectRepository(Orders) private ordersRepository: Repository<Orders>

    async purchaseItem(email:string,query:PurchaseDto)
    {    
        const result =  await this.productsRepository.createQueryBuilder('Products')
        .select("SUM(Product_Price)","sum")
        .where("Product_id in (:values)",{values : query.values})
        .getRawMany()


        const totalPrice = result[0].sum
        
        const addPurchase = await this.purchaseRepository.create({Customer_email:email,Product_id:query.values,Product_Price:totalPrice,Mode_of_Payment:query.Mode_of_Payment})
        const addOrder=await this.ordersRepository.create({Customer_email:email,P_id:query.values})
        this.ordersRepository.save(addOrder)

        return this.purchaseRepository.save(addPurchase)
    
    }

    async cancelPurchase(email:string,id : number) {
        const purchaseUser = await this.purchaseRepository.findOne({where: [{ "Customer_email": email,"Order_id":id }]})
        const ordersUser = await this.ordersRepository.findOne({where: [{ "Customer_email": email,"Order_id":id}]})
        await this.purchaseRepository.delete(purchaseUser);
        await this.ordersRepository.delete(ordersUser);

    return ("Your Purchase was cancelled.")

    }
}
