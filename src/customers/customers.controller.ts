import { Controller,Post,Body, Delete, Param, Patch, Get} from '@nestjs/common';
import { AuthService } from '../auth-jwt/auth.service';
import { serialize} from '../interceptors/serialize.interceptors';
import {  CreateUserDto,displayUserDto,LoginUserDto,ViewDto } from './customers.dto';
import { CustomersService } from './customers.service';


@Controller('customer')
export class CustomersController {
    constructor(private customersService : CustomersService,
                private authservice : AuthService,
                ){}

    @Post('/signUp')
    @serialize(ViewDto)
    async create(@Body() body:CreateUserDto) {
        const user = await this.authservice.signUp(body)
        return user;
    }
    
    @Post('/signIn')
    //@serialize(ViewDto)
    async signIn(@Body() body : LoginUserDto)
    {
        const user = await this.authservice.signIn(body.Email,body.Password)
        return user;
    }

    @Delete('/deleteCustomer/:id')
    async deleteCustomer(@Param('id') id:string){
      return await this.customersService.deleteCustomer(id);
    }

    @Patch('/updateCustomer/:id')
    updateCustomer(@Param('id') id : string , @Body() body ) {
        return this.customersService.updateCustomer(id,body);
    }

    @Get('/displayCustomers')
    displayCustomers() {
        return this.customersService.displayCustomers();
    }
    
}
