import {IsString,IsEnum} from 'class-validator';
import { PaymentMode} from './purchase.entity'

export class PurchaseDto
{   
    
    @IsString()
    values : string;

    @IsEnum(PaymentMode)
    Mode_of_Payment : PaymentMode;

}