import { Query, Controller, Post ,Request, UseGuards, Param, Delete} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { PurchaseDto } from './purchase.dto';

import { PurchaseService } from './purchase.service';


@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService,
        private jwtService : JwtService){}

    @UseGuards(JwtAuthGuard)
    @Post('/purchaseItem')
    async purchaseItem(@Query() query : PurchaseDto,
                @Request() req){
            
        type PayloadType = {
            email: string;
        }
        
        const bearerHeader = req.headers["authorization"];
        const decodedJwt = this.jwtService.decode(bearerHeader.split(' ')[1]) as PayloadType;
        const Customer_email=decodedJwt.email
           
        return await this.purchaseService.purchaseItem(Customer_email,query);
        }

    @UseGuards(JwtAuthGuard)
    @Delete('/cancelPurchase/:id')
    async cancelPurchase(@Param('id') id ,
                        @Request() req){
            
        type PayloadType = {
            email: string;
            }
        const bearerHeader = req.headers["authorization"];
        const decodedJwt = this.jwtService.decode(bearerHeader.split(' ')[1]) as PayloadType;
        const Customer_email=decodedJwt.email
    
        return await this.purchaseService.cancelPurchase(Customer_email,id);
        
    }
    
}



