import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { FilterDto } from './products.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
    constructor(private productsservice:ProductsService){}

    @UseGuards(JwtAuthGuard)
    @Get('/allProducts')
    getAllProducts(){
        return this.productsservice.getAllProducts();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/filteredProducts')
    getProducts(@Query() query : FilterDto){
        return this.productsservice.getProducts(query);
    }
}
