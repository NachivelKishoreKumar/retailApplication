import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth-jwt/constants';
import { Orders } from 'src/orders/orders.entity';
import { Products } from 'src/products/products.entity';
import { ProductsModule } from 'src/products/products.module';
import { PurchaseController } from './purchase.controller';
import { Purchase } from './purchase.entity';
import { PurchaseService } from './purchase.service';

@Module({
  imports : [TypeOrmModule.forFeature([Products,Purchase,Orders]),ProductsModule,PassportModule,
  JwtModule.register({
  secret: jwtConstants.secret})],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
