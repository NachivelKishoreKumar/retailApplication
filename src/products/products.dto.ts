import {IsOptional} from 'class-validator';

export class FilterDto{
    @IsOptional()
    Rating:number;

    @IsOptional()
    Type:string;

    @IsOptional()
    sort:string;

    @IsOptional()
    order: 'ASC' | 'DESC';

    @IsOptional()
    limit:number;

    @IsOptional()
    offset:number;

}