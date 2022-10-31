import {Injectable , BadRequestException, NotFoundException} from '@nestjs/common';
const md5 = require('md5')
import { JwtService } from '@nestjs/jwt';
import { WarehouseService } from 'src/warehouse/warehouse.service';

@Injectable()
export class AdminAuthService{
    constructor(
                private warehouseservice : WarehouseService,
                private jwtService : JwtService) {}



async adminSignIn(id : string , password : string)
    {
        const [admin] =await this.warehouseservice.find(id);
        if(!admin){
            throw new NotFoundException('User not found')
        }
        const hash = md5(password);

        if(admin.Password!==hash){
            throw new BadRequestException("Bad Password")
        }
        
        const payload = { id : admin.Admin_id, password : admin.Password };
        return{
            access_token: this.jwtService.sign(payload),
        };

    }

}