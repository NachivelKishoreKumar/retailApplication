import { Body, Controller, Post, UseGuards,Request, Get} from '@nestjs/common';
import { SupportDto } from './support.dto';
import { JwtService } from '@nestjs/jwt';
import { SupportService } from './support.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('support')
export class SupportController {

    constructor(private supportService: SupportService,
                private jwtService : JwtService){}

    @UseGuards(JwtAuthGuard)
    @Post('/createSupport')
    createSupport(@Body() body: SupportDto,
                    @Request() req){
        
        type PayloadType = {
            email: string;
          }
        const bearerHeader = req.headers["authorization"];
        const decodedJwt = this.jwtService.decode(bearerHeader.split(' ')[1]) as PayloadType;
        body.Customer_email=decodedJwt.email
       
        return this.supportService.createSupport({...body});
    }

    @UseGuards(JwtAuthGuard)
    @Get('/viewSupport')
    viewSupport(@Request() req){

        type PayloadType = {
            email: string;
            }
        const bearerHeader = req.headers["authorization"];
        const decodedJwt = this.jwtService.decode(bearerHeader.split(' ')[1]) as PayloadType;
        const email=decodedJwt.email

        return this.supportService.viewSupport(email);
    
    }


}
