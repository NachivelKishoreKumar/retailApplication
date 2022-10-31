import { Module, ValidationPipe } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers} from './customers/customers.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/orders.entity';
import { Products } from './products/products.entity';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Warehouse } from './warehouse/warehouse.entity';
import { SupportModule } from './support/support.module';
import { Support } from './support/support.entity';
import { PurchaseModule } from './purchase/purchase.module';
import { Purchase } from './purchase/purchase.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [ ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: `.env.development`
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
        useFactory: (config: ConfigService) => {
          return{
            type: 'mysql',
            database: config.get<string>('DB'),
            host: config.get<string>('HOST'),
            username: config.get<string>('USER'),
            password: config.get<string>('PASSWORD'),
            entities: [Customers,Orders,Products,Warehouse,Support,Purchase,Orders],
            synchronize: false
          };
        }
  }),
  CustomersModule,
  ProductsModule,
  OrdersModule,
  WarehouseModule,
  SupportModule,
  PurchaseModule
  ],
  providers : [{
    provide : APP_PIPE,
    useValue : new ValidationPipe({whitelist:true})
  }],    
  
})
export class AppModule {}
