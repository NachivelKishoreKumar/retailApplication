import { Controller, Get, Query, UseGuards,Request } from '@nestjs/common';
import { UserDto } from './orders.dto'
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService:OrdersService,
        private jwtService : JwtService){}
    
    @UseGuards(JwtAuthGuard)
    @Get('/userOrderDetails')
    async getUserOrderDetails(@Query() query:Partial<UserDto>,
                              @Request() req){
        type PayloadType = {
            email: string;
          }
           const bearerHeader = req.headers["authorization"];
           const decodedJwt = this.jwtService.decode(bearerHeader.split(' ')[1]) as PayloadType;
       
         return this.ordersService.getUserOrderDetails(query,decodedJwt.email);
    }
}
