import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminAuthService } from 'src/auth-jwt/adminauth.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AdminLoginDto, ProductDto, UpdateProductDto } from './warehouse.dto';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
    constructor(private adminAuthService : AdminAuthService,
                private warehouseService : WarehouseService){}

    @Post('/adminSignIn')
    async signIn(@Body() body : AdminLoginDto)
    {
        const user = await this.adminAuthService.adminSignIn(body.id,body.Password)
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('/insertWarehouse')
    async insertProduct(@Body() body : ProductDto) {
        return await this.warehouseService.insertProduct(body);
    }

    @Patch('/updateWarehouse/:id')
    updateProduct(@Param('id') id : number , @Body() body : UpdateProductDto) {
        return this.warehouseService.updateProduct(id,body);
    }
}
