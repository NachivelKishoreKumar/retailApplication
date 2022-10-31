import {IsString,IsNumber, IsOptional} from 'class-validator';

export class AdminLoginDto{

    @IsString()
    id : string;

    @IsString()
    Password : string;
}

export class ProductDto
{   
    @IsNumber()
    Product_id : number;

    @IsString()
    Product_name : string;

    @IsString()
    Product_model : string;

    @IsNumber()
    Availability : number;

    @IsNumber()
    Rating : number;

    @IsString()
    Type : string;

    @IsNumber()
    Product_Price : number;

}

export class UpdateProductDto
{   
    @IsOptional()
    @IsNumber()
    Product_id : number;

    @IsOptional()
    @IsString()
    Product_name : string;

    @IsOptional()
    @IsString()
    Product_model : string;

    @IsOptional()
    @IsNumber()
    Availability : number;

    @IsOptional()
    @IsNumber()
    Rating : number;

    @IsOptional()
    @IsString()
    Type : string;

    @IsOptional()
    @IsNumber()
    Product_Price : number;

}

