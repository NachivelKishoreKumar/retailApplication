import { Injectable,CACHE_MANAGER, Inject} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterDto} from './products.dto'
import { Repository } from 'typeorm';
import { Products } from './products.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private productsRepository: Repository<Products>,
                @Inject(CACHE_MANAGER) private readonly cacheManager:Cache){}

    async getAllProducts(){
        
        const cachedItem=await this.cacheManager.get('Result');
        if(cachedItem){
            return cachedItem;
        }
        const result = await this.productsRepository.find({
        select: ["Product_id", "Product_name", "Product_model","Availability","Rating","Type","Product_Price"]
        })
        await this.cacheManager.set('Result',{result});
        return result;
    }
    
    async getProducts(query : FilterDto){
        const cachedItem=await this.cacheManager.get('productsResult');
        
        /*if(cachedItem){
            return cachedItem;
        }*/
        const productsResult = await this.productsRepository.createQueryBuilder()
        .select(["Product_id", "Product_name", "Product_model","Availability","Rating","Type","Product_Price"])
        
        if(query.Rating){
            productsResult.andWhere('Rating = :Rating ',{Rating : query.Rating})
        }
        if(query.Type)
        {
        productsResult.andWhere('Type = :Type',{Type: query.Type})
        }
        if(query.sort && query.order)
        {
        productsResult.orderBy(query.sort,query.order)
        }
        if(query.limit)
        {
        productsResult.limit(query.limit)
        }
        if(query.offset)
        {
        productsResult.offset(query.offset)
        }
    

        //await this.cacheManager.set('productsResult',{productsResult});

        return productsResult.getRawMany();
    }
}
