import {IsString,IsNumber, IsOptional, IsEmail, IsEnum} from 'class-validator';
//import { Supporttype } from './support.entity';

export class SupportDto
{   
    @IsOptional()
    @IsEmail()
    Customer_email: string;

    /*@IsEnum(Supporttype)
    Support_type : Supporttype;*/

    @IsString()
    Support_type :string;

    @IsString()
    Support_query : string;

    @IsOptional()
    @IsNumber()
    Support_id : number;

}
