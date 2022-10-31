import { CacheModule, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminAuthService } from 'src/auth-jwt/adminauth.service';
import { jwtConstants } from 'src/auth-jwt/constants';
import { Products } from 'src/products/products.entity';
import { WarehouseController } from './warehouse.controller';
import { Warehouse } from './warehouse.entity';
import { WarehouseService } from './warehouse.service';
import { JwtStrategy } from 'src/auth-jwt/jwt.strategy';
import { ProductsService } from 'src/products/products.service';

@Module({
    imports : [TypeOrmModule.forFeature([Warehouse,Products]),PassportModule,CacheModule.register([
        {
          isGlobal:true,
          ttl : 100,
        },
      ]),JwtModule.register({
        secret: jwtConstants.secret})],
        providers : [WarehouseService,ProductsService,AdminAuthService,JwtStrategy],
        controllers: [WarehouseController],
})
export class WarehouseModule {}
