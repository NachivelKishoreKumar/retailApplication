import {IsOptional} from 'class-validator';

export class UserDto{

    @IsOptional()
    Customer_id : number;

    @IsOptional()
    Name : string;

    @IsOptional()
    Contact : string;

    @IsOptional()
    Email : string;

    @IsOptional()
    Gender : string;

    @IsOptional()
    Password : string;

    @IsOptional()
    Customer_email : string;

    @IsOptional()
    Product_ID : string;

    @IsOptional()
    Product_id : string;

    @IsOptional()
    Product_name : string;

    @IsOptional()
    Product_model : string;

    @IsOptional()
    Availabiliy : number;

    @IsOptional()
    Rating : number;

    @IsOptional()
    Type : string;

    @IsOptional()
    Product_Price : number;
}