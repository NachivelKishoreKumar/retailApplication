import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { AuthService } from '../auth-jwt/auth.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Customers} from './customers.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../auth-jwt/constants';
import { JwtStrategy } from '../auth-jwt/jwt.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([Customers]),PassportModule,
      JwtModule.register({
      secret: jwtConstants.secret})],
      providers : [CustomersService,AuthService,JwtStrategy],
      controllers : [CustomersController],
      exports : [CustomersService]
      

})
export class CustomersModule {}
