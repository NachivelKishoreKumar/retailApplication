import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from 'src/auth-jwt/constants';
import { SupportController } from './support.controller';
import { Support } from './support.entity';
import { SupportService } from './support.service';

@Module({
  imports : [TypeOrmModule.forFeature([Support]),PassportModule,
  JwtModule.register({
  secret: jwtConstants.secret})],
  providers: [SupportService],
  controllers: [SupportController]
})
export class SupportModule {}
