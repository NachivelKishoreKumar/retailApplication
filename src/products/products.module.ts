import { CacheModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/customers/customers.entity';
import { Orders } from 'src/orders/orders.entity';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  imports : [TypeOrmModule.forFeature([Customers,Orders,Products]),PassportModule,CacheModule.register([
    {
      isGlobal:true,
      ttl : 100,
    },
  ])],
    providers : [ProductsService],
    controllers: [ProductsController],
    exports : [ProductsService]
  
})
export class ProductsModule {}
