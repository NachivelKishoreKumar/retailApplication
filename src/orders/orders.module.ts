import { CacheModule, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth-jwt/constants';
import { Customers } from 'src/customers/customers.entity';
import { Products } from 'src/products/products.entity';
import { OrdersController } from './orders.controller';
import { Orders } from './orders.entity';
import { OrdersService } from './orders.service';

@Module({
    imports : [TypeOrmModule.forFeature([Customers,Orders,Products,Orders]),PassportModule,CacheModule.register([
        {
          isGlobal:true,
          ttl : 100,
        },
        JwtModule.register({
          secret: jwtConstants.secret,
          })
      ])],
        providers : [OrdersService,JwtService],
        controllers: [OrdersController],
      
    })
export class OrdersModule {
    
}
