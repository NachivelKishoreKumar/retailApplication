import { CACHE_MANAGER, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from 'src/customers/customers.entity';
import { Products } from 'src/products/products.entity';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { Orders } from './orders.entity';

@Injectable()
export class OrdersService {
    constructor(
                @InjectRepository(Customers) private customersRepository: Repository<Customers>,
                @Inject(CACHE_MANAGER) private readonly cacheManager:Cache) { }

        async getUserOrderDetails(query,email){
            /*const cachedItem=await this.cacheManager.get('orderResult');
                    
            if(cachedItem){
                return cachedItem;
                }*/    
            const orderResult = await this.customersRepository.createQueryBuilder('Customer')
            .innerJoinAndMapOne('Customer.Orders', Orders, 'Orders', 'Customer.Email = Orders.Customer_email')
            .innerJoinAndMapOne('Orders.Products', Products, 'Products', 'Products.Product_id=Orders.P_id')
            .select(query.columns)
            .where('Customer.Email = :email', { email: email })
            .getRawMany();
            //await this.cacheManager.set('orderResult',{orderResult});
            return orderResult;
            
        }
    
}
