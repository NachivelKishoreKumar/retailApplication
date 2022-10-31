import {IsString,IsEmail, IsOptional} from 'class-validator';
import {Expose} from 'class-transformer';

export class CreateUserDto{

    @IsEmail()
    Email : string;

    @IsString()
    Password : string;

    @IsString()
    Customer_id : string;

    @IsString()
    Contact : string;

    @IsString()
    Name : string;

    @IsString()
    Gender : string;

    @IsString()
    Address : string;

}

export class LoginUserDto{

    @IsString()
    Email : string;

    @IsString()
    Password : string;
}


export class ViewDto{

    @Expose()
    Customer_id : number;

    @Expose()
    Name : number;

    @Expose()
    Email : string;
}

export class displayUserDto{

    @IsOptional()
    @IsEmail()
    Email : string;

    @IsOptional()
    @IsString()
    Password : string;

    @IsOptional()
    @IsString()
    Customer_id : string;

    @IsOptional()
    @IsString()
    Contact : string;

    @IsOptional()
    @IsString()
    Name : string;

    @IsOptional()
    @IsString()
    Gender : string;

    @IsOptional()
    @IsString()
    Address : string;

}







